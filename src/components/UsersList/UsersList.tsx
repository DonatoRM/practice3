import { useState, useEffect } from 'react';
import style from './UsersList.module.css';

const UsersList: React.FC = () => {
	const { users, error, loading, reloadAllUsers } = useUsers();

	return (
		<div className={style.wrapper}>
			<h1 className={style.tile}>Listado de usuarios</h1>
		</div>
	);
};

interface Users {
	id: string;
	name: string;
	active: boolean;
	role: string;
}
interface UsersArray {
	users: [] | Users[];
	error: boolean;
	loading: boolean;
}

const useUsers = () => {
	const [data, setData] = useState<UsersArray>({
		users: [],
		error: true,
		loading: false
	});

	const setUsers: (newUsers: [] | Users[]) => void = (newUsers: [] | Users[]) =>
		setData({
			users: newUsers,
			error: false,
			loading: false
		});

	const setError: () => void = () =>
		setData({
			users: [],
			error: true,
			loading: false
		});

	const reloadAllUsers: () => void = () =>
		setData({
			users: [],
			error: false,
			loading: true
		});

	useEffect(() => {
		if (!data.loading) return;
		const controller = new AbortController();
		void loadAllUsers(setUsers, setError, controller.signal);
		return () => controller.abort();
	}, [data.loading]);

	return {
		...data,
		reloadAllUsers
	};
};

const loadAllUsers = async (
	setUsers: (newUsers: [] | Users[]) => void,
	setError: () => void,
	signal: AbortSignal
) => {
	const { users, error, abort } = await findAllUsers(signal);
	if (abort) return;
	if (error) setError();
	else setUsers(users);
};

const findAllUsers = async (signal: AbortSignal) => {
	try {
		const res = await fetch('http://localhost:4000/users', { signal });
		const users: [] | Users[] = (await res.json()) as Users[];
		return {
			users,
			error: false,
			abort: false
		};
	} catch (error) {
		const abort: boolean = (error as Error).name === 'AbortError';

		return {
			users: [],
			error: !abort,
			abort: abort
		};
	}
};

export default UsersList;
