import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import fs from 'fs';

const config = JSON.parse(fs.readFileSync('./firebase-applet-config.json', 'utf8'));

const firebaseConfig = {
  apiKey: config.apiKey,
  authDomain: config.authDomain,
  projectId: config.projectId,
  storageBucket: config.storageBucket,
  messagingSenderId: config.messagingSenderId,
  appId: config.appId,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app, config.firestoreDatabaseId);

async function run() {
  console.log('Querying Firestore...');
  const ref = collection(db, 'placementTests');
  const snap = await getDocs(ref);
  console.log(`Found ${snap.size} documents in placementTests.`);
  snap.forEach(doc => {
    const data = doc.data();
    if (doc.id !== 'meta_deleted_ids') {
      console.log(`- ${doc.id}: ${data.candidateName || data.name || data.code} (${data.phone})`);
    }
  });
}

run().catch(console.error);
