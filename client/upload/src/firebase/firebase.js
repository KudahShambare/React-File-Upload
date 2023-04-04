// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkuW7IZl2V1APzO9JwYeSms0yRTh7Lqhg",
  authDomain: "indian-database.firebaseapp.com",
  databaseURL: "https://indian-database-default-rtdb.firebaseio.com",
  projectId: "indian-database",
  storageBucket: "indian-database.appspot.com",
  messagingSenderId: "562661442379",
  appId: "1:562661442379:web:ab5b9ce088a72a0bd85ece",
  measurementId: "G-ZK7Z55HZ8B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);