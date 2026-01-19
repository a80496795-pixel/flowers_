// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// ⚡ Здесь вставляешь данные из своей Firebase консоли
const firebaseConfig = {
    apiKey: "ТВОЙ_API_KEY",
    authDomain: "ТВОЙ_PROJECT_ID.firebaseapp.com",
    projectId: "ТВОЙ_PROJECT_ID",
    storageBucket: "ТВОЙ_PROJECT_ID.appspot.com",
    messagingSenderId: "ТВОЙ_MESSAGING_SENDER_ID",
    appId: "ТВОЙ_APP_ID"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);