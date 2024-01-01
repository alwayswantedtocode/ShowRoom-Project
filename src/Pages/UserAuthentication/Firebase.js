// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCuZq7ZRiR7CG1uJG-F02TxevVMtHjRXx8",
//   authDomain: "showroom-authentication.firebaseapp.com",
//   projectId: "showroom-authentication",
//   storageBucket: "showroom-authentication.appspot.com",
//   messagingSenderId: "808024632139",
//   appId: "1:808024632139:web:65b2496ba84fb54e2796ce",
//   measurementId: "G-06ZN63JCDM",
// };
// const firebaseConfig = {
//   apiKey: String(import.meta.env.REACT_APP_API_KEY),
//   authDomain: String(process.env.REACT_APP_AUTH_DOMAIN),
//   projectId: String(process.env.REACT_APP_PROJECT_ID),
//   storageBucket: String(process.env.REACT_APP_STORAGE_BUCKET),
//   messagingSenderId: String(process.env.REACT_APP_MESSAGING_SENDER_ID),
//   appId: String(process.env.REACT_APP_APP_ID),
//   measurementId: String(process.env.REACT_APP_MEASUREMENT_ID),
// };

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, onAuthStateChanged };
