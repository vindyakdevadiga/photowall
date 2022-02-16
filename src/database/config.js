// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import * as firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApDaHt_r4KpYs0T-ELgrNKBXnC5hzDqeo",
  authDomain: "photowall-133d1.firebaseapp.com",
  databaseURL: "https://photowall-133d1-default-rtdb.firebaseio.com",
  projectId: "photowall-133d1",
  storageBucket: "photowall-133d1.appspot.com",
  messagingSenderId: "366434862880",
  appId: "1:366434862880:web:118482db0e8c0fff78b945",
  measurementId: "G-6P7745CMRV"
};

firebase.initializeApp(firebaseConfig)
const database = firebase.database();

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export {database}