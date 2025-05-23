import * as dotenv from 'dotenv';
dotenv.config();

import * as admin from 'firebase-admin';

const privateKey = process.env.FIREBASE_PRIVATE_KEY;
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
const projectId = process.env.FIREBASE_PROJECT_ID;

if (!privateKey || !clientEmail || !projectId) {
  throw new Error('Firebase environment variables are missing.');
}

admin.initializeApp({
  credential: admin.credential.cert({
    privateKey,
    clientEmail,
    projectId,
  }),
});

// 👇 Thêm dòng này để cho phép `import admin from ...`
export default admin;
