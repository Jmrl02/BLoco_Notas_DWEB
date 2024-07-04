import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB72lvr2EA3AusD8yuePiajT_RuMEa-h0o",
    authDomain: "bloco-de-notas-58f6b.firebaseapp.com",
    projectId: "bloco-de-notas-58f6b",
    storageBucket: "bloco-de-notas-58f6b.appspot.com",
    messagingSenderId: "103797876332",
    appId: "1:103797876332:web:992ec2787b03eefbd31a49",
    measurementId: "G-WZ07HSEKN5"
  };

  
const app = initializeApp(firebaseConfig);
export const database = getAuth(app)