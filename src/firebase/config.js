import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAj3eE1iZIcyp4TQyhSEoUk-3_GB1QDcHE",
  authDomain: "tienda-de-apps-3d9e9.firebaseapp.com",
  projectId: "tienda-de-apps-3d9e9",
  storageBucket: "tienda-de-apps-3d9e9.firebasestorage.app",
  messagingSenderId: "847230216556",
  appId: "1:847230216556:web:9be122c5f32087b1162b49",
  measurementId: "G-XM5973HPP7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
