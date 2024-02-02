// import getConfig from "next/config";
// const { publicRuntimeConfig: prc } = getConfig();

// //store
// import store from "./store";
// import {
//   setCurrentUser,
//   deleteCurrentUser,
// } from "./store/setting_store/actions";

// //firebase
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
// import "firebase/compat/storage";

// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY || prc.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN || prc.FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.FIREBASE_PROJECT_ID || prc.FIREBASE_PROJECT_ID,
//   storageBucket:
//     process.env.FIREBASE_STORAGE_BUCKET || prc.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_SENDER_ID || prc.FIREBASE_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID || prc.FIREBASE_APP_ID,
//   measurementId:
//     process.env.FIREBASE_MEASUREMENT_ID || prc.FIREBASE_MEASUREMENT_ID,
// };
// firebase.initializeApp(firebaseConfig);

// firebase.auth().onAuthStateChanged(() => {
//   var user = firebase.auth().currentUser;
//   if (user) store.dispatch(setCurrentUser({ ...user._delegate }));
//   else store.dispatch(deleteCurrentUser());
// });

// export default firebase;


import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

import store from './store';
import { setCurrentUser, deleteCurrentUser } from './store/setting_store/actions';

const firebaseConfig = {
  // apiKey: process.env.FIREBASE_API_KEY,
  apiKey: "AIzaSyDZGKY946AcUj_NFQ4xWwFYGufkVftOkKI",
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase only if there isn't an instance already
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, dispatch the current user's data to the store
    store.dispatch(setCurrentUser(user));
  } else {
    // User is signed out, dispatch to delete the current user
    store.dispatch(deleteCurrentUser());
  }
});

export default app;
export { auth, firestore, storage };
