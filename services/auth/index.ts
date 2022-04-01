import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import serviceAccount from '../../private/serviceAccountSettings.json';

const firebaseConfig = {
  apiKey: "AIzaSyDacKFdeu6cag_gIpW4n1KLcMIRFV0th7I",
  authDomain: "linked-todo-9ba9e.firebaseapp.com",
  databaseURL: "https://linked-todo-9ba9e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "linked-todo-9ba9e",
  storageBucket: "linked-todo-9ba9e.appspot.com",
  messagingSenderId: "353493019257",
  appId: "1:353493019257:web:76b92692932c9f3e6082a8"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const authProvider = new firebase.auth.GoogleAuthProvider();
authProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(authProvider);

export default auth;
