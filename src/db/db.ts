import { initializeApp } from 'firebase/app';

import { getFirestore, collection } from 'firebase/firestore';

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
initializeApp(firebaseConfig);

// init firestore services
export const db = collection(
	getFirestore(),
	import.meta.env.VITE_APP_DATABASE_COLLECTION as string,
);
