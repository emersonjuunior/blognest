import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyBcm0DQu1Ck_Zlcbj_xnQvnILFvS967r-w",
  authDomain: "blognest-a54e4.firebaseapp.com",
  projectId: "blognest-a54e4",
  storageBucket: "blognest-a54e4.firebasestorage.app",
  messagingSenderId: "393881019180",
  appId: "1:393881019180:web:179e625b43978968e08289",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export { db, auth }; 