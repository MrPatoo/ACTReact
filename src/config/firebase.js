// config/firebase.js
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, setLogLevel } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEgqD2MWlK_uwV74OuSJIXU7kYdEylpso",
  authDomain: "practicafirebase-220db.firebaseapp.com",
  projectId: "practicafirebase-220db",
  storageBucket: "practicafirebase-220db.appspot.com",
  messagingSenderId: "777933763302",
  appId: "1:777933763302:web:095433e6bef77d9611c127"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

const auth = getAuth(app);
const db = getFirestore(app);

// Opcional: activar logs para depuración
setLogLevel('debug');

console.log("Firebase app initialized:", app);
console.log("Firebase auth initialized:", auth);
console.log("Firestore initialized:", db);

export { auth, db };
