// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-2988a.firebaseapp.com",
  projectId: "blog-2988a",
  storageBucket: "blog-2988a.appspot.com",
  messagingSenderId: "714424015116",
  appId: "1:714424015116:web:f750c6ea13162ab4429129",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
