// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD18a6bP6Ec0QCsLm5bl04prN_WAchA4Is",
    authDomain: "gamtrack-3a2f2.firebaseapp.com",
    projectId: "gamtrack-3a2f2",
    storageBucket: "gamtrack-3a2f2.appspot.com",
    messagingSenderId: "492662811532",
    appId: "1:492662811532:web:4e59f354ffbc43eee384a9",
    measurementId: "G-5VTT1HQLJ1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);