import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAEgqD2MWlK_uwV74OuSJIXU7kYdEylpso",
  authDomain: "practicafirebase-220db.firebaseapp.com",
  projectId: "practicafirebase-220db",
  storageBucket: "practicafirebase-220db.appspot.com", // Revisa que esta URL sea correcta
  messagingSenderId: "777933763302",
  appId: "1:777933763302:web:095433e6bef77d9611c127"
};

// Inicializa Firebase solo si no ha sido inicializada previamente
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Inicializa la autenticación
const auth = getAuth(app);

// Verificar si la instancia de Firebase y la autenticación se han inicializado correctamente
console.log("Firebase app initialized:", app);  // Imprime la instancia de Firebase
console.log("Firebase auth initialized:", auth);  // Imprime la instancia de auth

export { auth };
