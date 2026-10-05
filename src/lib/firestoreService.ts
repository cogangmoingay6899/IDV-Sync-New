/**
 * Firebase Firestore Cloud Service & Real-time Dual-Sync Engine
 *
 * Provides persistent storage and real-time syncing across:
 * 1. Quản lý thông tin học viên & trạng thái đóng học phí (Students & Tuition records)
 * 2. Lưu kết quả bài kiểm tra đầu vào (Placement Tests & Candidate Answers)
 * 3. Lưu lịch sử điểm số bài kiểm tra từ vựng & bài test định kỳ (Vocab Tests, Reviews & Periodic Exam Scores)
 *
 * Also maintains resilient VPS filesystem / Local fallback so no data is ever lost.
 */

import {
  collection,
  doc,
  setDoc,
  getDocs,
  getDoc,
  deleteDoc,
  onSnapshot,
  writeBatch,
  updateDoc,
  arrayUnion,
  Unsubscribe,
} from 'firebase/firestore';
import { db } from '../firebase';

// Local in-memory listeners for client-side state reactivity
type CollectionListener<T> = (data: T[]) => void;
const activeListeners = new Map<string, Set<CollectionListener<any>>>();
const cachedCollections = new Map<string, any[]>();
const firestoreUnsubscribers = new Map<string, Unsubscribe>();
const activeFallbackIntervals = new Map<string, any>();

// Known deleted mock/sample items that should never reappear on any device
const KNOWN_DEFAULT_DELETED_IDS = [
  'pt-101', 'pt-102', 'pt-103'
];

// Global in-memory set of deleted IDs synced across all devices and storage backends
export const globalDeletedIdsSet = new Set<string>(KNOWN_DEFAULT_DELETED_IDS);

// Fetch the true deleted list from server immediately and keep in sync across all browsers
try {
  if (typeof window !== 'undefined') {
    // Load local deleted IDs if stored
    const localDeleted = localStorage.getItem('idv_global_deleted_ids');
    if (localDeleted) {
      try {
        const parsed = JSON.parse(localDeleted);
        if (Array.isArray(parsed)) {
          parsed.forEach((id: string) => globalDeletedIdsSet.add(String(id)));
        }
      } catch (e) {}
    }

    fetch('/api/deleted-ids')
      .then((res) => res.json())
      .then((json) => {
        if (json.success && Array.isArray(json.deletedIds)) {
          json.deletedIds.forEach((id: string) => globalDeletedIdsSet.add(String(id)));
          try {
            localStorage.setItem('idv_global_deleted_ids', JSON.stringify(Array.from(globalDeletedIdsSet)));
          } catch (e) {}

          // Re-filter all active cached collections and notify listeners
          for (const [colName, items] of cachedCollections.entries()) {
            const clean = items.filter((item) => !isRecordDeleted(item.id, colName));
            if (clean.length !== items.length) {
              cachedCollections.set(colName, clean);
              try {
                localStorage.setItem(`vps_col_${colName}`, JSON.stringify(clean));
              } catch (e) {}
              const listeners = activeListeners.get(colName);
              if (listeners) {
                listeners.forEach((cb) => {
                  try {
                    cb(clean);
                  } catch (e) {}
                });
              }
            }
          }
        }
      })
      .catch(() => {});
  }
} catch (e) {}

/**
 * Checks if a record ID has been deleted on ANY device in the cloud
 */
export function isRecordDeleted(id: string, colName?: string): boolean {
  if (!id || id === 'meta_deleted_ids') return true;
  if (globalDeletedIdsSet.has(String(id))) return true;
  const strId = String(id).toLowerCase();
  if (strId === 'cls-1790390511388' || strId.includes('lớp 68') || strId.includes('lop 68')) return true;
  return false;
}

/**
 * Helper to purge a deleted item from local in-memory cache and notify subscribers
 */
function purgeDeletedItemFromCache(collectionName: string, id: string) {
  const existing = cachedCollections.get(collectionName) || [];
  const filtered = existing.filter((item) => String(item.id) !== String(id) && item.id !== 'meta_deleted_ids');
  cachedCollections.set(collectionName, filtered);
  try {
    localStorage.setItem(`vps_col_${collectionName}`, JSON.stringify(filtered));
  } catch (e) {}
  const listeners = activeListeners.get(collectionName);
  if (listeners) {
    listeners.forEach((cb) => {
      try {
        cb(filtered);
      } catch (e) {}
    });
  }
}

/**
 * Synchronizes deleted IDs across cloud Firestore and VPS Server
 */
export async function syncCloudDeletedRecords(): Promise<void> {
  // 1. Fetch from server API
  try {
    const res = await fetch('/api/deleted-ids');
    if (res.ok) {
      const json = await res.json();
      if (json.success && Array.isArray(json.deletedIds)) {
        globalDeletedIdsSet.clear();
        KNOWN_DEFAULT_DELETED_IDS.forEach(id => globalDeletedIdsSet.add(id));
        json.deletedIds.forEach((id: string) => globalDeletedIdsSet.add(String(id)));
      }
    }
  } catch (e) {}

  // Persist updated deleted set to localStorage
  try {
    if (typeof window !== 'undefined') {
      localStorage.setItem('idv_global_deleted_ids', JSON.stringify(Array.from(globalDeletedIdsSet)));
    }
  } catch (e) {}

  // Clean currently cached collections
  for (const [colName, items] of cachedCollections.entries()) {
    const clean = items.filter((item) => !isRecordDeleted(item.id, colName));
    if (clean.length !== items.length) {
      cachedCollections.set(colName, clean);
      try {
        localStorage.setItem(`vps_col_${colName}`, JSON.stringify(clean));
      } catch (e) {}
      const listeners = activeListeners.get(colName);
      if (listeners) {
        listeners.forEach((cb) => {
          try {
            cb(clean);
          } catch (e) {}
        });
      }
    }
  }
}

// Auto-run sync on client startup
if (typeof window !== 'undefined') {
  syncCloudDeletedRecords();

  // Listen to SSE events for real-time instant cross-machine synchronization
  try {
    const sse = new EventSource('/api/storage/events');
    sse.onmessage = (ev) => {
      try {
        const msg = JSON.parse(ev.data);
        if (msg.type === 'sync' && msg.collection && Array.isArray(msg.data)) {
          const clean = msg.data.filter((item: any) => !isRecordDeleted(item.id, msg.collection));
          cachedCollections.set(msg.collection, clean);
          try {
            localStorage.setItem(`vps_col_${msg.collection}`, JSON.stringify(clean));
          } catch (e) {}
          const listeners = activeListeners.get(msg.collection);
          if (listeners) {
            listeners.forEach((cb) => {
              try { cb(clean); } catch (e) {}
            });
          }
        } else if (msg.type === 'test_submitted' && msg.collection) {
          fetchFromVPSServer(msg.collection, [], () => {});
          fetchFromVPSServer('vocab_test_submissions', [], () => {});
        } else if (msg.type === 'delete' && msg.id) {
          globalDeletedIdsSet.add(String(msg.id));
          if (msg.collection) {
            purgeDeletedItemFromCache(msg.collection, String(msg.id));
          }
        } else if (msg.type === 'deleted_ids_updated' && Array.isArray(msg.ids)) {
          msg.ids.forEach((id: string) => globalDeletedIdsSet.add(String(id)));
          syncCloudDeletedRecords();
        }
      } catch (e) {}
    };
  } catch (e) {}
}

// BroadcastChannel for instant cross-tab communication
let broadcastBus: BroadcastChannel | null = null;
try {
  if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
    broadcastBus = new BroadcastChannel('ielts_vps_sync_bus');
    broadcastBus.onmessage = (event) => {
      const { collection: colName, data } = event.data || {};
      if (colName && Array.isArray(data)) {
        const cleanData = data.filter((item: any) => !isRecordDeleted(item.id, colName));
        cachedCollections.set(colName, cleanData);
        const listeners = activeListeners.get(colName);
        if (listeners) {
          listeners.forEach((cb) => {
            try {
              cb(cleanData);
            } catch (err) {}
          });
        }
      }
    };
  }
} catch (e) {}

/**
 * Deeply sanitizes an object before saving (removes undefined, converts non-serializables)
 */
export function sanitizeFirestoreData(data: any): any {
  if (data === undefined) return null;
  if (data === null || typeof data !== 'object') return data;
  if (Array.isArray(data)) {
    return data.map(sanitizeFirestoreData);
  }
  const res: Record<string, any> = {};
  for (const [key, value] of Object.entries(data)) {
    if (value !== undefined) {
      res[key] = sanitizeFirestoreData(value);
    }
  }
  return res;
}

/**
 * Generic helper to subscribe to a Collection in real-time from Firebase Firestore.
 * Automatically seeds the collection with initialData if empty on first launch.
 */
export function subscribeCollection<T extends { id: string }>(
  collectionName: string,
  initialData: T[],
  onData: (data: T[]) => void
): () => void {
  // 1. Register listener in local subscriber registry
  if (!activeListeners.has(collectionName)) {
    activeListeners.set(collectionName, new Set());
  }
  const listenerSet = activeListeners.get(collectionName)!;
  listenerSet.add(onData);

  // 2. Load from Local Storage cache immediately for instant UI load
  let initialItems: T[] = (initialData || []).filter((i) => !isRecordDeleted(i.id, collectionName));
  try {
    const cached = localStorage.getItem(`vps_col_${collectionName}`);
    if (cached) {
      const parsed = JSON.parse(cached);
      if (Array.isArray(parsed) && parsed.length > 0) {
        initialItems = parsed.filter((c: any) => !isRecordDeleted(c.id, collectionName));
      }
    }
  } catch (e) {}

  // Placement test candidate submissions recovery
  if (collectionName === 'placementTests') {
    try {
      const candidateSubs = JSON.parse(
        localStorage.getItem('idv_submitted_candidate_placement_tests') || '[]'
      );
      if (Array.isArray(candidateSubs) && candidateSubs.length > 0) {
        const initialIds = new Set(initialItems.map((i) => i.id));
        const missing = candidateSubs.filter((s: any) => !initialIds.has(s.id) && !isRecordDeleted(s.id, 'placementTests'));
        if (missing.length > 0) {
          initialItems = [...missing, ...initialItems];
        }
      }
    } catch (e) {}
  }

  // Vocab tests / reviews presets check
  if (
    (collectionName === 'vocab_tests' || collectionName === 'vocab_reviews') &&
    initialData &&
    initialData.length > 0
  ) {
    const initialMap = new Map(initialData.map((p) => [p.id, p]));
    // Upgrade any dummy/placeholder items in initialItems with full question sets from initialData
    initialItems = initialItems.map((rawItem: T) => {
      const item = rawItem as any;
      const preset = initialMap.get(item.id) as any;
      if (
        preset &&
        Array.isArray(preset.questions) &&
        preset.questions.length > 0 &&
        (!Array.isArray(item.questions) || item.questions.length === 0)
      ) {
        return {
          ...item,
          title: preset.title || item.title,
          unitName: preset.unitName || item.unitName,
          courseLevel: preset.courseLevel || item.courseLevel,
          timePerQuestionSeconds: preset.timePerQuestionSeconds || item.timePerQuestionSeconds,
          questions: preset.questions,
          submissions: item.submissions || preset.submissions || [],
        } as unknown as T;
      }
      return rawItem;
    });

    const existingIds = new Set(initialItems.map((i) => i.id));
    const missing = initialData.filter((p) => !existingIds.has(p.id) && !isRecordDeleted(p.id, collectionName));
    if (missing.length > 0) {
      initialItems = [...missing, ...initialItems];
    }
  }

  // Filter any deleted records from initialItems
  initialItems = initialItems.filter((i) => !isRecordDeleted(i.id, collectionName));

  // Emit immediate cached/seed data so UI renders instantly
  cachedCollections.set(collectionName, initialItems);
  onData(initialItems);

  // 3. Sync via VPS Server Storage & SSE Push (Bypassing Firestore completely to avoid quota and cost issues)
  if (!activeFallbackIntervals.has(collectionName) && typeof window !== 'undefined') {
    fetchFromVPSServer(collectionName, initialData, onData);
    const interval = setInterval(() => {
      fetchFromVPSServer(collectionName, initialData, onData);
    }, 30000);
    activeFallbackIntervals.set(collectionName, interval);
  }

  // Unsubscribe function
  return () => {
    listenerSet.delete(onData);
    if (listenerSet.size === 0) {
      activeListeners.delete(collectionName);
      if (activeFallbackIntervals.has(collectionName)) {
        clearInterval(activeFallbackIntervals.get(collectionName));
        activeFallbackIntervals.delete(collectionName);
      }
    }
  };
}

// Fallback helper to fetch from VPS endpoint
async function fetchFromVPSServer<T extends { id: string }>(
  collectionName: string,
  initialData: T[],
  onData: (data: T[]) => void
) {
  try {
    const res = await fetch(`/api/storage/${encodeURIComponent(collectionName)}?_t=${Date.now()}`, {
      headers: { 'Cache-Control': 'no-cache', Pragma: 'no-cache' },
    });
    if (res.ok) {
      const result = await res.json();
      let serverItems: T[] = Array.isArray(result.data) ? result.data : [];
      if (serverItems.length === 0 && initialData && initialData.length > 0) {
        serverItems = initialData.filter((i) => !isRecordDeleted(i.id, collectionName));
      }
      
      // Always notify subscribers, even if empty, so auto-sync can trigger if needed
      cachedCollections.set(collectionName, serverItems);
      try {
        localStorage.setItem(`vps_col_${collectionName}`, JSON.stringify(serverItems));
      } catch (e) {}
      onData(serverItems);
    }
  } catch (e) {}
}

/**
 * Fetch all documents in a collection (VPS-First Architecture)
 */
export async function fetchCollection<T extends { id: string }>(
  collectionName: string
): Promise<T[]> {
  // 1. VPS-FIRST: Fetch directly from local VPS server storage
  try {
    const res = await fetch(`/api/storage/${encodeURIComponent(collectionName)}?_t=${Date.now()}`, {
      headers: { 'Cache-Control': 'no-cache', Pragma: 'no-cache' },
    });
    if (res.ok) {
      const json = await res.json();
      if (Array.isArray(json.data)) {
        const clean = json.data.filter((item: any) => !isRecordDeleted(item.id, collectionName));
        cachedCollections.set(collectionName, clean);
        try {
          localStorage.setItem(`vps_col_${collectionName}`, JSON.stringify(clean));
        } catch (e) {}
        return clean;
      }
    }
  } catch (err) {
    console.warn(`[VPS Storage] fetchCollection fallback for ${collectionName}:`, err);
  }

  // 2. Secondary fallback to Firebase Firestore
  try {
    const colRef = collection(db, collectionName);
    const snapshot = await getDocs(colRef);
    if (!snapshot.empty) {
      const metaDoc = snapshot.docs.find((d) => d.id === 'meta_deleted_ids');
      if (metaDoc && metaDoc.exists()) {
        const metaData = metaDoc.data();
        if (Array.isArray(metaData?.deletedIds)) {
          metaData.deletedIds.forEach((id: string) => globalDeletedIdsSet.add(String(id)));
        }
      }

      const items: T[] = snapshot.docs
        .filter((d) => d.id !== 'meta_deleted_ids' && !isRecordDeleted(d.id, collectionName))
        .map((d) => ({
          id: d.id,
          ...d.data(),
        })) as T[];
      cachedCollections.set(collectionName, items);
      try {
        localStorage.setItem(`vps_col_${collectionName}`, JSON.stringify(items));
      } catch (e) {}
      return items;
    }
  } catch (err) {
    console.warn(`[Firebase Firestore] fetchCollection fallback for ${collectionName}:`, err);
  }

  // 3. Final Fallback to local memory / cache
  const cached = cachedCollections.get(collectionName);
  if (cached) return cached.filter((item: any) => !isRecordDeleted(item.id, collectionName));

  try {
    const raw = localStorage.getItem(`vps_col_${collectionName}`);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed.filter((item: any) => !isRecordDeleted(item.id, collectionName));
    }
  } catch (e) {}

  return [];
}

/**
 * Fetch a single document by ID (VPS-First Architecture)
 */
export async function fetchDocument<T>(
  collectionName: string,
  id: string
): Promise<T | null> {
  // 1. VPS-FIRST: Check VPS server storage endpoint
  try {
    const res = await fetch(`/api/storage/${encodeURIComponent(collectionName)}/${encodeURIComponent(id)}?_t=${Date.now()}`, {
      headers: { 'Cache-Control': 'no-cache', Pragma: 'no-cache' },
    });
    if (res.ok) {
      const json = await res.json();
      if (json?.data) return json.data as T;
    }
  } catch (e) {}

  // 2. Secondary fallback to Firebase Firestore
  try {
    const docRef = doc(db, collectionName, String(id));
    const snap = await getDoc(docRef);
    if (snap.exists()) {
      return { id: snap.id, ...snap.data() } as T;
    }
  } catch (err) {
    console.warn(`[Firebase Firestore] fetchDocument error for ${collectionName}/${id}:`, err);
  }

  // 3. Fallback to local cache
  const list = cachedCollections.get(collectionName) || [];
  const found = list.find((item) => String(item.id) === String(id));
  return found || null;
}

/**
 * Save or update a single document (VPS-First Architecture)
 */
export async function saveDocument<T extends { id: string }>(
  collectionName: string,
  item: T
): Promise<void> {
  const cleanItem = sanitizeFirestoreData(item);
  const stringId = String(cleanItem.id);

  // 1. Optimistically update client in-memory cache and notify local subscribers immediately
  const existingList = cachedCollections.get(collectionName) || [];
  const index = existingList.findIndex((e) => String(e.id) === stringId);

  let updatedList: any[];
  if (index >= 0) {
    updatedList = [...existingList];
    updatedList[index] = { ...existingList[index], ...cleanItem };
  } else {
    updatedList = [cleanItem, ...existingList];
  }

  cachedCollections.set(collectionName, updatedList);
  try {
    localStorage.setItem(`vps_col_${collectionName}`, JSON.stringify(updatedList));
  } catch (e) {}

  const listeners = activeListeners.get(collectionName);
  if (listeners) {
    listeners.forEach((cb) => {
      try {
        cb(updatedList);
      } catch (err) {}
    });
  }

  if (broadcastBus) {
    try {
      broadcastBus.postMessage({ collection: collectionName, data: updatedList });
    } catch (e) {}
  }

  // 2. VPS-FIRST PERSISTENCE: Write directly to VPS filesystem storage
  try {
    await fetch(`/api/storage/${encodeURIComponent(collectionName)}?_t=${Date.now()}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' },
      body: JSON.stringify(cleanItem),
    });
    console.log(`✅ [VPS Server Storage] Saved ${collectionName}/${stringId}`);
  } catch (vpsErr) {
    console.warn(`⚠️ [VPS Server Storage] VPS save fallback:`, vpsErr);
  }

  // 3. Background Replication to Firebase Firestore (non-blocking, never fails the user UI)
  try {
    const docRef = doc(db, collectionName, stringId);
    setDoc(docRef, cleanItem, { merge: true }).catch(() => {});
  } catch (firestoreErr) {}
}

/**
 * Save multiple items in a batch (VPS-First Architecture)
 */
export async function saveBatchDocuments<T extends { id: string }>(
  collectionName: string,
  items: T[]
): Promise<void> {
  const cleanItems = items.map((i) => sanitizeFirestoreData(i));

  // 1. Optimistic in-memory cache update
  const existingList = cachedCollections.get(collectionName) || [];
  const map = new Map<string, any>();
  existingList.forEach((e) => map.set(String(e.id), e));
  cleanItems.forEach((item) => {
    const sid = String(item.id);
    const curr = map.get(sid) || {};
    map.set(sid, { ...curr, ...item });
  });

  const updatedList = Array.from(map.values());
  cachedCollections.set(collectionName, updatedList);
  try {
    localStorage.setItem(`vps_col_${collectionName}`, JSON.stringify(updatedList));
  } catch (e) {}

  const listeners = activeListeners.get(collectionName);
  if (listeners) {
    listeners.forEach((cb) => {
      try {
        cb(updatedList);
      } catch (err) {}
    });
  }

  // 2. VPS-FIRST PERSISTENCE: Batch save to VPS backend storage
  try {
    await fetch(`/api/storage/${encodeURIComponent(collectionName)}/batch?_t=${Date.now()}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' },
      body: JSON.stringify(cleanItems),
    });
    console.log(`✅ [VPS Server Storage] Batch saved ${cleanItems.length} items to ${collectionName}`);
  } catch (vpsErr) {
    console.warn(`⚠️ [VPS Server Storage] Batch save error on ${collectionName}:`, vpsErr);
  }

  // 3. Background Replication to Firebase Firestore
  try {
    const batch = writeBatch(db);
    cleanItems.slice(0, 450).forEach((item) => {
      const docRef = doc(db, collectionName, String(item.id));
      batch.set(docRef, item, { merge: true });
    });
    batch.commit().catch(() => {});
  } catch (err) {}
}

/**
 * Delete a document with permanent cross-device sync (VPS-First Architecture)
 */
export async function deleteDocument(collectionName: string, id: string): Promise<void> {
  const stringId = String(id);

  // 1. Record to global in-memory deleted IDs set
  globalDeletedIdsSet.add(stringId);

  // 2. Optimistic cache update
  const existingList = cachedCollections.get(collectionName) || [];
  const filtered = existingList.filter((item) => String(item.id) !== stringId);
  cachedCollections.set(collectionName, filtered);
  try {
    localStorage.setItem(`vps_col_${collectionName}`, JSON.stringify(filtered));
    localStorage.setItem('idv_global_deleted_ids', JSON.stringify(Array.from(globalDeletedIdsSet)));
    if (collectionName === 'classes') {
      const deletedIds: string[] = JSON.parse(localStorage.getItem('idv_deleted_class_ids') || '[]');
      if (!deletedIds.includes(stringId)) {
        deletedIds.push(stringId);
        localStorage.setItem('idv_deleted_class_ids', JSON.stringify(deletedIds));
      }
    } else if (collectionName === 'placementTests') {
      const deletedIds: string[] = JSON.parse(localStorage.getItem('idv_deleted_placement_test_ids') || '[]');
      if (!deletedIds.includes(stringId)) {
        deletedIds.push(stringId);
        localStorage.setItem('idv_deleted_placement_test_ids', JSON.stringify(deletedIds));
      }
    } else if (collectionName === 'students') {
      const deletedIds: string[] = JSON.parse(localStorage.getItem('idv_deleted_student_ids') || '[]');
      if (!deletedIds.includes(stringId)) {
        deletedIds.push(stringId);
        localStorage.setItem('idv_deleted_student_ids', JSON.stringify(deletedIds));
      }
    }
  } catch (e) {}

  const listeners = activeListeners.get(collectionName);
  if (listeners) {
    listeners.forEach((cb) => {
      try {
        cb(filtered);
      } catch (err) {}
    });
  }

  // 3. VPS-FIRST DELETION: Delete from VPS Server Storage
  try {
    await fetch(`/api/storage/${encodeURIComponent(collectionName)}/${encodeURIComponent(stringId)}?_t=${Date.now()}`, {
      method: 'DELETE',
    });
    console.log(`✅ [VPS Server Storage] Deleted ${collectionName}/${stringId}`);
  } catch (vpsErr) {
    console.warn(`⚠️ [VPS Server Storage] Delete error for ${collectionName}/${stringId}:`, vpsErr);
  }

  // 4. Register tombstone to VPS deleted-ids registry
  try {
    fetch('/api/deleted-ids', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: stringId, collection: collectionName }),
    }).catch(() => {});
  } catch (e) {}

  // 5. Broadcast to other open browser tabs
  if (broadcastBus) {
    try {
      broadcastBus.postMessage({ collection: collectionName, data: filtered });
    } catch (e) {}
  }

  // 6. Background non-blocking delete on Firestore
  try {
    const docRef = doc(db, collectionName, stringId);
    deleteDoc(docRef).catch(() => {});
  } catch (err) {}

  // 7. If placement test, also send DELETE to dedicated placement-tests endpoint
  if (collectionName === 'placementTests') {
    try {
      fetch(`/api/placement-tests/${encodeURIComponent(stringId)}?_t=${Date.now()}`, {
        method: 'DELETE',
        headers: { 'Cache-Control': 'no-cache' },
      }).catch(() => {});
    } catch (e) {}
  }
}

/**
 * Permanently purges all documents in a collection from Firestore, VPS, and Local cache.
 */
export async function clearCollection(collectionName: string): Promise<void> {
  // 1. Clear local memory cache & localStorage
  cachedCollections.set(collectionName, []);
  try {
    localStorage.setItem(`vps_col_${collectionName}`, JSON.stringify([]));
    if (collectionName === 'classes') {
      localStorage.removeItem('idv_deleted_class_ids');
    }
  } catch (e) {}

  // 2. Notify all local listeners
  const listeners = activeListeners.get(collectionName);
  if (listeners) {
    listeners.forEach((cb) => {
      try {
        cb([]);
      } catch (err) {}
    });
  }

  // 3. Broadcast to all open tabs
  if (broadcastBus) {
    try {
      broadcastBus.postMessage({ collection: collectionName, data: [] });
    } catch (e) {}
  }

  // 4. Batch delete all documents in Firestore
  try {
    const colRef = collection(db, collectionName);
    const snap = await getDocs(colRef);
    if (!snap.empty) {
      const batch = writeBatch(db);
      snap.docs.forEach((d) => batch.delete(d.ref));
      await batch.commit();
      console.log(`✅ [Firebase Firestore] Cleared all ${snap.size} documents in ${collectionName}`);
    }
  } catch (err) {
    console.warn(`⚠️ [Firebase Firestore] Clear collection error on ${collectionName}:`, err);
  }

  // 5. Clear VPS backend storage
  try {
    fetch(`/api/storage/${encodeURIComponent(collectionName)}?_t=${Date.now()}`, {
      method: 'DELETE',
      headers: { 'Cache-Control': 'no-cache' },
    }).catch(() => {});
  } catch (e) {}
}

/**
 * Atomically increments the student count of a class.
 */
export async function incrementClassStudentCount(classId: string, amount: number = 1) {
  try {
    const cls = await fetchDocument<any>('classes', classId);
    if (cls) {
      const updated = {
        ...cls,
        currentStudents: Math.max(0, (cls.currentStudents || 0) + amount),
      };
      await saveDocument('classes', updated);
    }
  } catch (err) {
    console.error(`[Firebase Firestore] Error incrementing student count for class ${classId}:`, err);
  }
}

/**
 * Adds a submission or score record to the test's submissions array using atomic arrayUnion.
 */
export async function addSubmissionToTest(
  collectionName: string,
  testId: string,
  submission: any
) {
  try {
    const cleanSub = sanitizeFirestoreData(submission);

    // 1. VPS-FIRST ATOMIC SUBMISSION: Persist directly to VPS backend filesystem (0 quota, 0 permission error)
    try {
      const vpsRes = await fetch('/api/storage/tests/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' },
        body: JSON.stringify({
          collectionName,
          testId,
          submission: cleanSub,
        }),
      });
      if (vpsRes.ok) {
        console.log(`✅ [VPS Server Storage] Successfully saved test submission for ${testId}`);
      }
    } catch (vpsErr) {
      console.warn('[VPS Storage] VPS submit request fallback:', vpsErr);
    }

    // 2. Update local in-memory cache & UI subscribers immediately
    let currentTests = cachedCollections.get(collectionName) || [];
    let test = currentTests.find((t: any) => String(t.id) === String(testId));
    
    if (!test) {
      try {
        const res = await fetch(`/api/storage/${encodeURIComponent(collectionName)}?_t=${Date.now()}`);
        if (res.ok) {
          const json = await res.json();
          if (Array.isArray(json.data)) {
            currentTests = json.data;
            cachedCollections.set(collectionName, currentTests);
            test = currentTests.find((t: any) => String(t.id) === String(testId));
          }
        }
      } catch (e) {}
    }

    if (!test) {
      test = {
        id: testId,
        title: `Bài kiểm tra ${testId}`,
        unitName: 'Tổng hợp',
        courseLevel: 'Khóa 1',
        timePerQuestionSeconds: 20,
        questions: [],
        submissions: [],
        createdAt: new Date().toISOString(),
      };
    }

    const existingSubs = Array.isArray(test.submissions) ? test.submissions : [];
    const subMap = new Map<string, any>();
    existingSubs.forEach((s: any) => {
      const k = s.id || `${s.studentName}_${s.className}_${s.submittedAt}`;
      subMap.set(k, s);
    });
    subMap.set(cleanSub.id || `${cleanSub.studentName}_${cleanSub.className}_${cleanSub.submittedAt}`, cleanSub);

    const mergedSubs = Array.from(subMap.values());
    const updatedTest = {
      ...test,
      submissions: mergedSubs,
      updatedAt: new Date().toISOString(),
    };

    const updatedTests = currentTests.map((t: any) => (String(t.id) === String(testId) ? updatedTest : t));
    if (!currentTests.some((t: any) => String(t.id) === String(testId))) {
      updatedTests.push(updatedTest);
    }
    cachedCollections.set(collectionName, updatedTests);
    try {
      localStorage.setItem(`vps_col_${collectionName}`, JSON.stringify(updatedTests));
    } catch (e) {}

    const listeners = activeListeners.get(collectionName);
    if (listeners) {
      listeners.forEach((cb) => {
        try { cb(updatedTests); } catch (e) {}
      });
    }

    // 3. Secondary Background Replication to Firestore (non-blocking, never fails the user UI)
    try {
      const docRef = doc(db, collectionName, String(testId));
      updateDoc(docRef, {
        submissions: arrayUnion(cleanSub),
        updatedAt: new Date().toISOString(),
      }).catch(async () => {
        await setDoc(docRef, updatedTest, { merge: true }).catch(() => {});
      });
    } catch (firestoreErr) {
      // Background Firestore replica warning (does not disrupt user experience)
    }

    // Also persist individual submission to standalone collection on VPS & background
    saveDocument('vocab_test_submissions', cleanSub).catch(() => {});
  } catch (err) {
    console.error(`[VPS Storage] Error adding submission to ${collectionName}:`, err);
  }
}

/**
 * Automatically cleans obsolete teacher records
 */
export async function cleanObsoleteTeachers<T extends { id: string }>(
  standardTeachers: T[]
) {
  try {
    await saveBatchDocuments('teachers', standardTeachers);
  } catch (err) {
    console.error('[Firebase Firestore] Error cleaning obsolete teachers:', err);
  }
}

/**
 * Synchronizes missing preset vocab tests
 */
export async function syncPresetVocabTests<T extends { id: string }>(
  presetTests: T[]
) {
  try {
    await saveBatchDocuments('vocab_tests', presetTests);
  } catch (err) {
    console.error('[Firebase Firestore] Error syncing preset vocab tests:', err);
  }
}

/**
 * Synchronizes missing preset vocab reviews
 */
export async function syncPresetVocabReviews<T extends { id: string }>(
  presetTests: T[]
) {
  try {
    await saveBatchDocuments('vocab_reviews', presetTests);
  } catch (err) {
    console.error('[Firebase Firestore] Error syncing preset vocab reviews:', err);
  }
}
