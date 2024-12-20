// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDc6n-Xc34DybSNdIgKXE820uKhym-1uM",
  authDomain: "toptanyapimarket-bfe9d.firebaseapp.com",
  projectId: "toptanyapimarket-bfe9d",
  storageBucket: "toptanyapimarket-bfe9d.firebasestorage.app",
  messagingSenderId: "127778256001",
  appId: "1:127778256001:web:bd15e24821ecaf8acac980",
  measurementId: "G-LMC22WTXE4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);