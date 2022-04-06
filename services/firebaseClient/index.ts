import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

let app: FirebaseApp;

const firebaseConfig = {
  apiKey: 'AIzaSyDacKFdeu6cag_gIpW4n1KLcMIRFV0th7I',
  authDomain: 'linked-todo-9ba9e.firebaseapp.com',
  databaseURL: 'https://linked-todo-9ba9e-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'linked-todo-9ba9e',
  storageBucket: 'linked-todo-9ba9e.appspot.com',
  messagingSenderId: '353493019257',
  appId: '1:353493019257:web:76b92692932c9f3e6082a8'
};

initializeApp(firebaseConfig);

if (getApps().length) {
  app = getApp();
} else {
  app = initializeApp(firebaseConfig);
}

export const auth = getAuth(app);

export default app;
