import { initializeApp } from "firebase/app";
import type { FirebaseOptions } from "firebase/app";

const firebaseConfig: FirebaseOptions = {
    apiKey: "AIzaSyC3aVBKEF4-0xvWKHwuVD3hiC-PXvcJHIA",
    authDomain: "hse-esol-sandbox.firebaseapp.com",
    projectId: "hse-esol-sandbox",
    storageBucket: "hse-esol-sandbox.appspot.com",
    messagingSenderId: "1020715652732",
    appId: "1:1020715652732:web:c973d4d0b6b127adc0dbf9"
};

export const firebaseApp = initializeApp(firebaseConfig);