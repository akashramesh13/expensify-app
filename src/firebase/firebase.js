// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";
import {
  signInWithPopup,
  signOut,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB4TJg4yXzT3gc-pvR0iGME5LhBgNTmr_c",
  authDomain: "foss-expensify.firebaseapp.com",
  databaseURL: "https://foss-expensify-default-rtdb.firebaseio.com",
  projectId: "foss-expensify",
  storageBucket: "foss-expensify.appspot.com",
  messagingSenderId: "132634750239",
  appId: "1:132634750239:web:dcfd3f71877af251afd42a",
  measurementId: "G-8174GTMB7L",
};

const googleAuthProvider = new GoogleAuthProvider();
// Initialize Firebase
initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth();
export {
  db as default,
  ref,
  set,
  onValue,
  googleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  auth,
  signOut,
};
