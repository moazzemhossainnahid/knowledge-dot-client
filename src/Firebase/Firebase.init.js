// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration  
const firebaseConfig = {
 apiKey: "AIzaSyCb9szXY-XzUzCO5LdrOP2_cEIgYQH-nbY",
  authDomain: "knowledgedot-841c5.firebaseapp.com",
  projectId: "knowledgedot-841c5",
  storageBucket: "knowledgedot-841c5.appspot.com",
  messagingSenderId: "838954310574",
  appId: "1:838954310574:web:9a66e6e2fcbf2a1777063f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
