import { Ref, ref } from 'vue';
import { db } from './configFirebase';

type Drink = {
  id: string;
  beer: number;
  cider: number;
  eventID: Record<string, unknown>;
  userID: Record<string, unknown>;
};
type DrinkRef = Ref<Drink | undefined>;

const getDrinkObject = (userID: string, eventID: string) => {
  const drinksObject: DrinkRef = ref();
  const userRef = db.collection('users').doc(userID);
  const eventRef = db.collection('events').doc(eventID);

  const res = db.collection('streglisteDrink').where('userID', '==', userRef).where('eventID', '==', eventRef).get();

  (async () => {
    const data = (await res).docs;
    if (data.length > 1) {
      throw Error('There are mulitple documents matching that query.');
    } else drinksObject.value = { id: data[0].id, ...data[0].data() } as Drink;
  })();

  return drinksObject;
};

export default getDrinkObject;
