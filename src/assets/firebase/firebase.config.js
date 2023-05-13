// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-ZB8KSqNr8RneIi0-JYx6PyDdCGDI4ho",
  authDomain: "car-doctor-22296.firebaseapp.com",
  projectId: "car-doctor-22296",
  storageBucket: "car-doctor-22296.appspot.com",
  messagingSenderId: "86249685862",
  appId: "1:86249685862:web:add83bd127ccdd54127ea7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app