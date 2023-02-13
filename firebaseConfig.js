import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyAi4s4sbIbnGR6JEzrFlE52TjJrgrCiLRc",
    authDomain: "yark-stick.firebaseapp.com",
    databaseURL: "https://yark-stick.firebaseio.com",
    projectId: "yark-stick",
    storageBucket: "yark-stick.appspot.com",
    messagingSenderId: "417624645225",
    appId: "1:417624645225:web:acf75c588b99b979e9ccf8",
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);