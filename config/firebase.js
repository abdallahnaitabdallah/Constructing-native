// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKWiGSduWQHOmQ4Dei3cXbqBJ7WDYBKT0",
  authDomain: "construcing-native.firebaseapp.com",
  projectId: "construcing-native",
  storageBucket: "construcing-native.appspot.com",
  messagingSenderId: "519135239477",
  appId: "1:519135239477:web:f1c474fede0bbd92c5007c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
