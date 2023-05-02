// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyByEENS6FVsri-gOHPbBlPIjxGK3ZMoguY",
    authDomain: "best-recipes-f43ba.firebaseapp.com",
    projectId: "best-recipes-f43ba",
    storageBucket: "best-recipes-f43ba.appspot.com",
    messagingSenderId: "704734029550",
    appId: "1:704734029550:web:08796dfee1bdf4ce31f5ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;