 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-494a2.firebaseapp.com",
  projectId: "mern-blog-494a2",
  storageBucket: "mern-blog-494a2.appspot.com",
  messagingSenderId: "191973307051",
  appId: "1:191973307051:web:5df66d5e785764e32a3dee",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
