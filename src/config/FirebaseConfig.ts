// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYSzZ-zLNgHt3Ib5u2JFX695Rh009A9xc",
  authDomain: "alleventproject-fe928.firebaseapp.com",
  projectId: "alleventproject-fe928",
  storageBucket: "alleventproject-fe928.appspot.com",
  messagingSenderId: "1018853362918",
  appId: "1:1018853362918:web:e34ef28e0149404bd03f27",
  measurementId: "G-807M4W3PSH",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
