import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDjzP7WvmRgvxpo4028AXGLqIEaGYdCW_M",
    authDomain: "fir-course-e49e9.firebaseapp.com",
    projectId: "fir-course-e49e9",
    storageBucket: "fir-course-e49e9.appspot.com",
    messagingSenderId: "616073819042",
    appId: "1:616073819042:web:e78647927396f8810a38fb",
    measurementId: "G-252JJ2DF4F"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()

export const db = getFirestore(app)
export const storage = getStorage(app)