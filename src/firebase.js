import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB1DUwEkKaztgKks37raSgGVtcORNORcns",
  authDomain: "fir-4bb5d.firebaseapp.com",
  projectId: "fir-4bb5d",
  storageBucket: "fir-4bb5d.appspot.com",
  messagingSenderId: "572789749965",
  appId: "1:572789749965:web:0457a3c08a9c3ec3365184",
  measurementId: "G-N8Y5C4LCTZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();


export {db, auth};