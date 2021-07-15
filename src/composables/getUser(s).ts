import { Ref, ref } from 'vue';
import { db } from './configFirebase';

type User = {
  id: string;
  name: string;
  'scout-name': string;
};
type UserRef = Ref<User | undefined>;
type Users = User[];
type UsersRef = Ref<Users | undefined>;

export const getAllUsersFromDatabase = (): UsersRef => {
  const users: UsersRef = ref([]);
  const res = db.collection('users').get();

  (async () => {
    users.value = (await res).docs.map((user) => ({ id: user.id, ...user.data() } as User));
  })();

  return users;
};

export const getAUserFromDatabase = (userID: User['id']): UserRef => {
  const user: UserRef = ref();
  const res = db.collection('users').doc(userID).get();

  (async () => {
    const data = await res;
    user.value = { id: data.id, ...data.data() } as User;
  })();

  return user;
};
