import { createStore } from 'vuex';
import { db } from '@/composables/configFirebase';
import * as Schema from '@/composables/schema';

export default createStore({
  state: {
    users: () => db.collection('users').get(),
    events: () => db.collection('events').get(),
    stregliste: (event: Schema.Event, user: Schema.User) => db.collection('stregliste').where('userID', '==', user).where('eventID', '==', event).get(),
  },
  mutations: {
    addOne: () => {
      const user = db.collection('users').add({});
      return user;
    },
  },
  actions: {},
  modules: {},
});
