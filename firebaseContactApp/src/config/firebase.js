// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiaed5ncmjneayG9TMrnQIZdbbyAAiPfA",
  authDomain: "vite-contact-9b57e.firebaseapp.com",
  projectId: "vite-contact-9b57e",
  storageBucket: "vite-contact-9b57e.appspot.com",
  messagingSenderId: "62903536864",
  appId: "1:62903536864:web:be90c3f966a712fc0c1485",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
