// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyfGpV62ogWADHJkBhnsZ-lMyn3h1lhZE",
  authDomain: "aph-pet-family.firebaseapp.com",
  projectId: "aph-pet-family",
  storageBucket: "aph-pet-family.appspot.com",
  messagingSenderId: "1000037686922",
  appId: "1:1000037686922:web:746c4c49dee07473b69773",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
