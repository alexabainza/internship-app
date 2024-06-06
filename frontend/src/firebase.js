// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "internship-app-5c8dd.firebaseapp.com",
  projectId: "internship-app-5c8dd",
  storageBucket: "internship-app-5c8dd.appspot.com",
  messagingSenderId: "521596603207",
  appId: "1:521596603207:web:6040d21857f403122d5a62",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
