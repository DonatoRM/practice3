import style from './UsersList.module.css';
import { useUsers } from '../../lib/hooks/useUsers';
import UsersRendered from './UsersRendered/UsersRendered';

const UsersList: React.FC = () => {
	const { users, error, loading, reloadAllUsers } = useUsers();

	return (
		<div className={style.wrapper}>
			<h1 className={style.title}>Listado de usuarios</h1>
			<UsersRendered users={users} error={error} loading={loading} />
		</div>
	);
};

export default UsersList;
