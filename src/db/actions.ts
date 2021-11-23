import { doc, getDocs, query, updateDoc } from '@firebase/firestore';
import { db } from './db';
import { drinks, Stregliste } from './schema';

export const getUsers = async () =>
	(await getDocs(query(db))).docs.map((user) => ({ ...user.data, id: user.id } as Stregliste));

export const addToDrink =
	(props: Readonly<{ user: Stregliste; drink: drinks }>) =>
	(drink: drinks, mutater: (a: number) => number) => {
		const data = { [drink]: mutater(props.user[drink]) };

		updateDoc(doc(db, props.user.id), data).catch((err) => console.log(err));
	};

export const resetList = async () => {
	(await getDocs(query(db))).forEach((user) => updateDoc(doc(db, user.id), { beer: 0, cider: 0 }));
};
