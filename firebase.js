
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAKE7_TmH_7ndHQEDOy_P5UsduuZDiiEbU",
  authDomain: "buddy-cd041.firebaseapp.com",
  projectId: "buddy-cd041",
  storageBucket: "buddy-cd041.appspot.com",
  messagingSenderId: "764052604085",
  appId: "1:764052604085:web:5180ae3a1b67b4ab866afc"
};



const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
const auth = getAuth(app);
const db = getFirestore(app);


export {db};

export {auth};