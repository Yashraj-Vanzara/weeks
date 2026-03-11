// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDui7x7wHZJ2F5wyJdWzfceWYC4qQQqtcs",
  authDomain: "netflixgpt-0123.firebaseapp.com",
  projectId: "netflixgpt-0123",
  storageBucket: "netflixgpt-0123.firebasestorage.app",
  messagingSenderId: "911975746743",
  appId: "1:911975746743:web:95976eba778b0e78709132",
  measurementId: "G-8PW9V8TEER"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics)
export const auth = getAuth();