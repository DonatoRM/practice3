import { useEffect, useState } from 'react';
import { Users } from '../api/findAllUsers';
import { loadAllUsers } from '../users/loadAllUsers';

export const useUsers = () => {
	const [data, setData] = useState<UsersArray>({
		users: [],
		error: false,
		loading: true
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

interface UsersArray {
	users: [] | Users[];
	error: boolean;
	loading: boolean;
}
