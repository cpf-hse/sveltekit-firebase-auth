import { initializeApp } from "firebase/app";
import type { FirebaseOptions } from "firebase/app";

const firebaseConfig: FirebaseOptions = {
    apiKey: "AIzaSyC1WXQ5q6oI7p_kbH1ZUuxnTFS-TgPvnXs",
    authDomain: "logistik-freight-tracking-qas.firebaseapp.com",
    projectId: "logistik-freight-tracking-qas",
    storageBucket: "logistik-freight-tracking-qas.appspot.com",
    messagingSenderId: "637052869186",
    appId: "1:637052869186:web:e030436f10e761279aebdb",
};

export const firebaseApp = initializeApp(firebaseConfig);
