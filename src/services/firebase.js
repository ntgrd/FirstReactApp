import { initializeApp } from "firebase/app";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut as firebaseSignOut, getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyB6_DRsYjMkXpGdoQbITzBik-2XR-JvVLY",
    authDomain: "firstreactproject-d0d85.firebaseapp.com",
    databaseURL: "https://firstreactproject-d0d85-default-rtdb.firebaseio.com",
    projectId: "firstreactproject-d0d85",
    storageBucket: "firstreactproject-d0d85.appspot.com",
    messagingSenderId: "886976142605",
    appId: "1:886976142605:web:e8d6e8f64fc1be5f412444"
};

initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getDatabase();

export const signUp = async (email, pass) => {
    await createUserWithEmailAndPassword(auth, email, pass);
};

export const login = async (email, pass) => {
    await signInWithEmailAndPassword(auth, email, pass);
};

export const signOut = async () => {
    await firebaseSignOut(auth);
}