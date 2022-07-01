import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from 'firebase/auth'
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore'
import firebaseConfig from "./secret/firebaseConfig";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

//use emulator
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  connectAuthEmulator(auth, "http://localhost:9099");
  connectFirestoreEmulator(db, 'localhost', 8080, { ssl: false });
}

export { app, auth, db }