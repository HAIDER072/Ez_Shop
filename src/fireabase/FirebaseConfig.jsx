// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRTpQRzGsDaAm2HUnfqQag9LmbTqL5GTM",
  authDomain: "ezshop-9e204.firebaseapp.com",
  projectId: "ezshop-9e204",
  storageBucket: "ezshop-9e204.firebasestorage.app",
  messagingSenderId: "144128655020",
  appId: "1:144128655020:web:1db22d70ab4f81493da909"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}