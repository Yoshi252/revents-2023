// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "revents-fe121.firebaseapp.com",
  projectId: "revents-fe121",
  storageBucket: "revents-fe121.appspot.com",
  messagingSenderId: "1005281362214",
  appId: "1:1005281362214:web:002b15efc6297a71a201e7",
  measurementId: "G-1Q6N3SSZ60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// This was the only thing added
export const db = getFirestore(app);