import { initializeApp } from "firebase/app";
import { getAuth ,GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAOvohZXllTwOazrFqCQmXrTAbK94CggFY",
  authDomain: "linkedin-clone-79e99.firebaseapp.com",
  projectId: "linkedin-clone-79e99",
  storageBucket: "linkedin-clone-79e99.appspot.com",
  messagingSenderId: "541940016357",
  appId: "1:541940016357:web:cfc05cdcbde5c9ef97600c"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const GoogleProvider=new GoogleAuthProvider(app)
export const database= getFirestore(app)