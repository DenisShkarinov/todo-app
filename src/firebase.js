import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAcZv-7jOljsryaJopyojqJDGZOZkzAuOg",
    authDomain: "todo-c1b00.firebaseapp.com",
    projectId: "todo-c1b00",
    storageBucket: "todo-c1b00.firebasestorage.app",
    messagingSenderId: "420447037082",
    appId: "1:420447037082:web:3f1d5456156ac6b5436123",
    measurementId: "G-G0139REBPS",
    databaseURL: 'https://todo-c1b00-default-rtdb.firebaseio.com/'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);