import fs from 'fs';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

async function main() {
  const config = JSON.parse(fs.readFileSync('./firebase-applet-config.json', 'utf8'));
  const app = initializeApp(config);
  const db = getFirestore(app, config.firestoreDatabaseId);

  console.log('Connecting to firestore...');

  const col = collection(db, 'teachers');
  const snap = await getDocs(col);
  console.log(`Found ${snap.size} teachers in Firestore.`);
  snap.docs.forEach(d => {
    console.log({ id: d.id, ...d.data() });
  });
}

main().catch(console.error);
