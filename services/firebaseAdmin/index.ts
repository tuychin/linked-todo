import admin from 'firebase-admin';
import serviceAccount from '../../secret/serviceAccountSettings.json';

const {
  apps,
  initializeApp,
  credential,
  auth,
  firestore,
} = admin;

if (!apps.length) {
  try {
    initializeApp({
      credential: credential.cert(serviceAccount as admin.ServiceAccount)
    });
  } catch (error: any) {
    console.error('Firebase admin initialization error', error.stack);
  }
}

export const verifyIdToken = (token = '') => {
  return auth()
    .verifyIdToken(token)
    .catch((err) => err);
};

export const db = firestore();

export default admin;


