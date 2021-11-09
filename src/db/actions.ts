import { db } from './db';
import { drinks, Stregliste } from './schema';

export const getUsers = (): Stregliste[] => {
	let users: Stregliste[] = [];

	(async () => {
		users = (
			await db.collection(import.meta.env.VITE_APP_DATABASE_COLLECTION as string).get()
		).docs.map((user) => ({ ...user.data, id: user.id } as Stregliste));
	})();
	return users;
};

export function addToDrink(props: Readonly<{ user: Stregliste; drink: string | undefined }>) {
	return (drink: drinks, isAdd: boolean): void => {
		const getAmount = (amnt: number) => {
			if (!amnt) {
				return isAdd ? 0 : 1;
			}
			return amnt;
		};

		const amnt = getAmount(props.user[drink]);
		const data = {
			[drink]: amnt + (isAdd ? 1 : -1) || 0,
		};

		db.collection(import.meta.env.VITE_APP_DATABASE_COLLECTION as string)
			.doc(props.user.id)
			.update(data)
			.catch((err) => {
				console.log(err);
			});
	};
}

export const initStregliste = (): void => {
	db.collection('users')
		.get()
		.then((users) => {
			users.forEach((user) => {
				db.collection('stregliste').add({ user: user.ref });
			});
		});
};
export const initStreglisteMVP = (): void => {
	db.collection('users')
		.get()
		.then((users) => {
			users.forEach((user) => {
				db.collection('stregliste').add({ 'display-name': user.data()['display-name'] });
			});
		});
};

export const resetStreglisteMVP = (): void => {
	db.collection(import.meta.env.VITE_APP_DATABASE_COLLECTION as string)
		.get()
		.then((users) => {
			users.forEach((user) => {
				user.ref.update({ beer: 0, cider: 0 });
			});
		});
};

interface User {
	'display-name': string;
	beer: number;
	cider: number;
}
export const exportStreglisteMVP = (): User[] => {
	// eslint-disable-next-line
	const result: User[] = [];
	db.collection(import.meta.env.VITE_APP_DATABASE_COLLECTION as string)
		.get()
		.then((users) => {
			users.forEach((user) => {
				result.push(user.data() as User);
			});
		});
	// eslint-disable-next-line
	return result;
};
