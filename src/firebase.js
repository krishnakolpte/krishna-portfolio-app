/** @format */

import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDNPnFaQVgq_nvHvZzOBqnAzeix_aoPupc",
    authDomain: "krishna-portfolio-app.firebaseapp.com",
    projectId: "krishna-portfolio-app",
    storageBucket: "krishna-portfolio-app.appspot.com",
    messagingSenderId: "845046203996",
    appId: "1:845046203996:web:674150b50d2c6ea8ed4899",
    measurementId: "G-8LD0M9VWWZ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore();
