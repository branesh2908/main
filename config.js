import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: 'AIzaSyCjV8iOVSEUdVJBZ5Blak7QhsYFMWHq0bc',
  authDomain: "fir-github-auth-b5110.firebaseapp.com",
  projectId: "fir-github-auth-b5110",
  storageBucket: "fir-github-auth-b5110.appspot.com",
  messagingSenderId: "857975576429",
  appId: "1:857975576429:web:0a1d4e6a5a3b08febcac64",
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Initialize Firebase Auth
// const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db };