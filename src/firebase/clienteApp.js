import { initializeApp, getApps, getApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

export const createFirebaseApp = () => {

  const clientCredentials = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  }


  const firebaseConfig = {
    apiKey: "AIzaSyDxF4_yts6ytjHFJ9eMWBeBS4LSSDidLww",
    authDomain: "amashop-rapha.firebaseapp.com",
    databaseURL: "https://amashop-rapha-default-rtdb.firebaseio.com",
    projectId: "amashop-rapha",
    storageBucket: "amashop-rapha.appspot.com",
    messagingSenderId: "1023419364736",
    appId: "1:1023419364736:web:3dcfa3279b19b4a6d37d65",
    measurementId: "G-RM7L7MGJF9"
  };

  if (getApps().length === 0) {
    const app = initializeApp(firebaseConfig);
    // Check that `window` is in scope for the analytics module!
    if (typeof window !== 'undefined') {
      // Enable analytics. https://firebase.google.com/docs/analytics/get-started
      if ('measurementId' in firebaseConfig) {
        //getAnalytics(app)
      }
    }
    return app;
  } else {
    return getApp();
  }
}