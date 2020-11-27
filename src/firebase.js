import firebase from "firebase/app";

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
export default firebase.initializeApp(firebaseConfig);
