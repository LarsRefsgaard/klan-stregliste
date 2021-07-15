import { Ref, ref } from 'vue';
import { db } from './configFirebase';

// export const drinks = ref([]);
const getDrinkObject = (userID: string, eventID: string) => {
  const userRef = db.collection('users').doc(userID);
  const eventRef = db.collection('events').doc(eventID);

  const res = db.collection('streglisteDrink').where('userID', '==', userRef).where('eventID', '==', eventRef).get();

  (async () => {
    const data = (await res).docs;
    // drinks.value = data;
  })();
};
