import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCR1epuHJjjhTEGSCgVOAh5GbIh3kiefio",
  authDomain: "myproject-7f027.firebaseapp.com",
  projectId: "myproject-7f027",
  storageBucket: "myproject-7f027.appspot.com",
  messagingSenderId: "565280953855",
  appId: "1:565280953855:web:1f9ee1c12586d213e143ca",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
 export const db=getFirestore(app)
export default app;
