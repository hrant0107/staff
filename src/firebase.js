import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyCvB6cYNwGq7pf4UqdnQJ6GeNgFi3mhbTM",
  authDomain: "staff-890b2.firebaseapp.com",
  projectId: "staff-890b2",
  storageBucket: "staff-890b2.appspot.com",
  messagingSenderId: "170564400145",
  appId: "1:170564400145:web:5548e41cee7e856455edb0",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage();
export const database = getDatabase(app);
