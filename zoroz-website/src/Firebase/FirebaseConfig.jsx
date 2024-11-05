// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeCL4eTsy56x88PPhMYG4KDi2VE_HLJgo",
  authDomain: "zoroz-cc9fb.firebaseapp.com",
  projectId: "zoroz-cc9fb",
  storageBucket: "zoroz-cc9fb.firebasestorage.app",
  messagingSenderId: "644635267574",
  appId: "1:644635267574:web:086df0f11f18e08e2d37d7",
  measurementId: "G-H072JL0DN8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth };
