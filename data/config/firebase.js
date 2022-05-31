// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi3mfoVkbX-yfPAP6thsN4--tG5PC8lcc",
  authDomain: "animelist-7baa1.firebaseapp.com",
  projectId: "animelist-7baa1",
  storageBucket: "animelist-7baa1.appspot.com",
  messagingSenderId: "132895645537",
  appId: "1:132895645537:web:55880cb199b671fdce6f20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);