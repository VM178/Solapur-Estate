// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-99b76.firebaseapp.com",
  projectId: "mern-estate-99b76",
  storageBucket: "mern-estate-99b76.appspot.com",
  messagingSenderId: "52732872690",
  appId: "1:52732872690:web:632dda992d0639b3644d6b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);