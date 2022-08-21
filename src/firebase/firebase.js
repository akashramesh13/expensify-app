// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getDatabase();

export { db as default, ref, set, onValue };

// set(ref(db, `users/`), {
//   name: "Akash Ramesh",
//   age: 23,
//   location: {
//     city: "Chennai",
//     country: "India",
//   },
// })
//   .then(() => {
//     console.log("Data is saved");
//   })
//   .catch((err) => {
//     console.log("Something went wrong: ", err);
//   });
