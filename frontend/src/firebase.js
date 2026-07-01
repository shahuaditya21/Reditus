import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

    const firebaseConfig = {
    apiKey: "AIzaSyDCenqc7skMXDuzufS9HBdJH1IL49sApGk",
    authDomain: "reditus-e828b.firebaseapp.com",
    projectId: "reditus-e828b",
    storageBucket: "reditus-e828b.firebasestorage.app",
    messagingSenderId: "25491881801",
    appId: "1:25491881801:web:b64d3e7b9cfaf0eee3a498",
    };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;