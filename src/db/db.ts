import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyD9xSOxjMzaU0AIBgy_eto09qwA5DUw9ZE',
	authDomain: 'klanen-digitalization.firebaseapp.com',
	projectId: 'klanen-digitalization',
	storageBucket: 'klanen-digitalization.appspot.com',
	messagingSenderId: '659774005893',
	appId: '1:659774005893:web:b65bb8a64d5807bc467fec',
	measurementId: 'G-QGLNZ6PXSD',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore services
export const db = firebase.firestore();
export const timestamp = firebase.firestore.FieldValue.serverTimestamp();
