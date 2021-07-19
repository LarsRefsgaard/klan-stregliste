import { ref } from 'vue';
import { db } from './fb';
import 'firebase/firestore';

type CollRef = firebase.default.firestore.CollectionReference;
type DocRef = firebase.default.firestore.DocumentReference;
type Query = firebase.default.firestore.Query;

export const getUsers = (): CollRef => db.collection('users');
export const getEvents = (): CollRef => db.collection('events');
export const getStregliste = (user: DocRef, event: DocRef): Query => db.collection('stregliste').where('userID', '==', user).where('eventID', '==', event);

export const getUserDocsInArray = () => {
  const users = ref();
  (async () => {
    users.value = await getUsers().get();
  })();
  return users;
};
