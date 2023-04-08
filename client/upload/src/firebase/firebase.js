// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAi4T9sv0bGB8657bS2pe80jlH3nbYWpyA",
  authDomain: "react-testing-7908d.firebaseapp.com",
  projectId: "react-testing-7908d",
  storageBucket: "react-testing-7908d.appspot.com",
  messagingSenderId: "173524434968",
  appId: "1:173524434968:web:3937be78bbecfa7c5b436d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);