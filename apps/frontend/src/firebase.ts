// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKvafIYYqLZXqk2kwVFRF5HuPKqBBGVJw",
  authDomain: "lastcall-1d57c.firebaseapp.com",
  projectId: "lastcall-1d57c",
  storageBucket: "lastcall-1d57c.appspot.com",
  messagingSenderId: "288797030702",
  appId: "1:288797030702:web:802ed7f0438e768f9ea2bf",
  measurementId: "G-TY9RJRLEBJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);
