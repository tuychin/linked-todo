import admin from 'firebase-admin';
import serviceAccount from '../../secret/serviceAccountSettings.json';

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as admin.ServiceAccount)
    });
  } catch (error: any) {
    console.error('Firebase admin initialization error', error.stack);
  }
}

export const verifyIdToken = (token) => {
  return admin.auth()
    .verifyIdToken(token)
    .catch((err) => err);
}

export const db = admin.firestore();

export default admin;


