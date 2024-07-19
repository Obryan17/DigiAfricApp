// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBumg7rs6Is8fveIC0a9uToO6utxc-5sgk",
  authDomain: "digitalafrica-fe11e.firebaseapp.com",
  projectId: "digitalafrica-fe11e",
  storageBucket: "digitalafrica-fe11e.appspot.com",
  messagingSenderId: "707823951328",
  appId: "1:707823951328:web:e48b8852973aa7d5f25f85",
  measurementId: "G-703VMJ6MRB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
