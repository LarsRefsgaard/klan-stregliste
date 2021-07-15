import { Ref, ref } from 'vue';
import { db } from './configFirebase';

type Event = {
  id: string;
  name: string;
  startDate: Date;
  endDate: Date;
};
type EventRef = Ref<Event | undefined>;

// type Events = Event[];
// type EventsRef = Ref<Events | undefined>;

const getCurrentEvent = (): EventRef => {
  const event: EventRef = ref();
  const currentDate = new Date();

  const res = db.collection('events').where('startDate', '<=', currentDate).where('endDate', '>=', currentDate).get();

  (async () => {
    const data = (await res).docs;
    if (data.length > 1) {
      throw Error('There are mulitple events today.');
    } else event.value = { id: data[0].id, ...data[0].data() } as Event;
  })();

  return event;
};

export default getCurrentEvent;
