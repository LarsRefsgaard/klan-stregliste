import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyANeH-ZsteHJJB0p-2CgzQGOo5bE7FMBFY',
  authDomain: 'stregliste-klan.firebaseapp.com',
  projectId: 'stregliste-klan',
  storageBucket: 'stregliste-klan.appspot.com',
  messagingSenderId: '106371751144',
  appId: '1:106371751144:web:38c0d49891be9b97a1bd5d',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore services
export const db = firebase.firestore();
export const timestamp = firebase.firestore.FieldValue.serverTimestamp();
