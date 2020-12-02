import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB6ytJ2V5CqADWwu0Y9jtEzrY924PfxVcw",
  authDomain: "finsta-8e8a4.firebaseapp.com",
  databaseURL: "https://finsta-8e8a4.firebaseio.com",
  projectId: "finsta-8e8a4",
  storageBucket: "finsta-8e8a4.appspot.com",
  messagingSenderId: "604707364277",
  appId: "1:604707364277:web:04aa3f34d6dbab3bfd8dfc",
}; 
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const authService = firebase.auth();

export const firebaseInstance = firebase;
export const dbService = firebase.firestore();
export default authService;