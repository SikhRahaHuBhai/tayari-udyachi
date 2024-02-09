// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2vUDyqpmp95ayfRX30zBSrvXw9Q1kFdw",
  authDomain: "tayari-udyachi.firebaseapp.com",
  projectId: "tayari-udyachi",
  storageBucket: "tayari-udyachi.appspot.com",
  messagingSenderId: "110250923589",
  appId: "1:110250923589:web:af7f81ecea2f23a013352c",
  measurementId: "G-N8FZ34Q03F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;