import { collection, doc, getDocs, query, updateDoc } from '@firebase/firestore';
import { db } from './db';
import { drinks, Stregliste } from './schema';

export const getUsers = () => {
	let users: Stregliste[] = [];

	getDocs(query(db)).then((snapshot) => {
		users = snapshot.docs.map((user) => ({ ...user.data, id: user.id } as Stregliste));
	});

	return users;
};

export const addToDrink =
	(props: Readonly<{ user: Stregliste; drink: drinks }>) =>
	(drink: drinks, mutater: (a: number) => number) => {
		const data = { [drink]: mutater(props.user[drink]) };

		updateDoc(doc(db, props.user.id), data).catch((err) => console.log(err));
	};
