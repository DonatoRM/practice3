import { Users, findAllUsers } from '../api/findAllUsers';

export const loadAllUsers = async (
	setUsers: (newUsers: [] | Users[]) => void,
	setError: () => void,
	signal: AbortSignal
) => {
	const { users, error, abort } = await findAllUsers(signal);
	if (abort) return;
	if (error) setError();
	else setUsers(users);
};
