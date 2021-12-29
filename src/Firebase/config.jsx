// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjBbR3_rN3C1nYvwiX0jXYXFZWN7KlI8w",
  authDomain: "e-commerce-coderhouse-react.firebaseapp.com",
  projectId: "e-commerce-coderhouse-react",
  storageBucket: "e-commerce-coderhouse-react.appspot.com",
  messagingSenderId: "779512526424",
  appId: "1:779512526424:web:de69b013daf31cfb877c2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);