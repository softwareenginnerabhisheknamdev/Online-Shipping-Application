 
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBMeSAD0pAOScIyHWP62DrDfwcrxlRFej8",
  authDomain: "myproject1-ca6a4.firebaseapp.com",
  projectId: "myproject1-ca6a4",
  storageBucket: "myproject1-ca6a4.firebasestorage.app",
  messagingSenderId: "835588951713",
  appId: "1:835588951713:web:2546b24e58ee6b18926ae0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB=getFirestore(app)
const auth=getAuth(app)

export {fireDB,auth}