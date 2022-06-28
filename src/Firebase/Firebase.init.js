// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDspv8WFmRIU1Yh0uxOiZ2l3WfpF4iZaIw",
  authDomain: "fox-tech-71f71.firebaseapp.com",
  projectId: "fox-tech-71f71",
  storageBucket: "fox-tech-71f71.appspot.com",
  messagingSenderId: "348337549099",
  appId: "1:348337549099:web:c777ea38153e5cd2d45f6e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
