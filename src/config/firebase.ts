// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZXY2v-1xFZwCTe85u2J-rtYG1xlgsv8c",
  authDomain: "jobmatcher-6b3dc.firebaseapp.com",
  projectId: "jobmatcher-6b3dc",
  storageBucket: "jobmatcher-6b3dc.appspot.com",
  messagingSenderId: "715644185340",
  appId: "1:715644185340:web:e55417318efb09aa9cc579",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services you will use
export const auth = getAuth(app);
export const db = getFirestore(app);
