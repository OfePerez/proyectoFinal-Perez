// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsWuQogXqMnY5em-LT9MYVjXi_smtKRK4",
  authDomain: "proyectofinal-perez-bca30.firebaseapp.com",
  projectId: "proyectofinal-perez-bca30",
  storageBucket: "proyectofinal-perez-bca30.firebasestorage.app",
  messagingSenderId: "820186757039",
  appId: "1:820186757039:web:032e2817ca1546e13de15a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app)