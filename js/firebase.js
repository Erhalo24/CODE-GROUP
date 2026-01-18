// Firebase core
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";

// Auth
import {
  getAuth,
  GoogleAuthProvider
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";

// Firestore
import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyASKGbu8lQqSHXPkY8PoulLC9f4SR3SYiw",
  authDomain: "code-group-3b6e8.firebaseapp.com",
  projectId: "code-group-3b6e8",
  storageBucket: "code-group-3b6e8.firebasestorage.app",
  messagingSenderId: "197761010794",
  appId: "1:197761010794:web:2b9dbd05b3f0a941264e13"
};

// Init
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
