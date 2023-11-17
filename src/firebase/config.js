// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsbxC62ZIZknGefEruhdUAG7aW7ZTqgVM",
  authDomain: "logiroute-10407.firebaseapp.com",
  projectId: "logiroute-10407",
  storageBucket: "logiroute-10407.appspot.com",
  messagingSenderId: "437015306554",
  appId: "1:437015306554:web:7f22457e8077e2dfbe7003"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp)