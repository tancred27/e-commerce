import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBPRcZSOdYlKxjgy756BcwoolkDoJwo9ck",
  authDomain: "e-commerce-d276b.firebaseapp.com",
  databaseURL: "https://e-commerce-d276b.firebaseio.com",
  projectId: "e-commerce-d276b",
  storageBucket: "e-commerce-d276b.appspot.com",
  messagingSenderId: "797297288563",
  appId: "1:797297288563:web:a33803c93a5c21a9ae5106",
  measurementId: "G-8E8WGLK3LJ"
};

export const createUserProfileDoc = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
