// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGIdrh8yVCF-OuZB9O1yiDYkfwsYa2_O4",
  authDomain: "tendarize-9ad09.firebaseapp.com",
  projectId: "tendarize-9ad09",
  storageBucket: "tendarize-9ad09.appspot.com",
  messagingSenderId: "338412414275",
  appId: "1:338412414275:web:6d015a3ac1133f1fb87bf6",
  measurementId: "G-9WEXNR2XG5"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);