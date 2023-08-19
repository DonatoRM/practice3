export const findAllUsers = async (signal: AbortSignal) => {
	try {
		const res = await fetch('http://localhost:4000/users', { signal });
		const users: [] | Users[] = (await res.json()) as Users[];
		return {
			users,
			error: !res.ok,
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

export interface Users {
	id: string;
	name: string;
	active: boolean;
	role: string;
}
