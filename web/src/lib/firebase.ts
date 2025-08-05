// lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCkY6DIGjR8q4lV4OW5k9FY2HsvZwzQr9Y",
  authDomain: "smartspend-71bd1.firebaseapp.com",
  projectId: "smartspend-71bd1",
  storageBucket: "smartspend-71bd1.firebasestorage.app",
  messagingSenderId: "901006951996",
  appId: "1:901006951996:web:b7b0c2123b42ad67a62539",
  measurementId: "G-3JCDP2X5CG"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
