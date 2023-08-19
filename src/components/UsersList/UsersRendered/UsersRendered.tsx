import style from './UsersRendered.module.css';
import { Users } from '../../../lib/api/findAllUsers';
import UserRow from './UserRow/UserRow';

const UsersRendered: React.FC<UsersRenderedProps> = ({
	users,
	loading,
	error
}) => {
	let elementsOfList;
	if (loading)
		elementsOfList = [
			<p key={0} className={style.loading}>
				Cargando usuarios...
			</p>
		];
	if (error)
		elementsOfList = [
			<p key={0} className={style.error}>
				Error al buscar usuarios
			</p>
		];
	if (!loading && !error) {
		if (users.length === 0)
			elementsOfList = [
				<p key={0} className={style.empty}>
					No existen usuarios
				</p>
			];
		else
			elementsOfList = users.map(user => <UserRow key={user.id} {...user} />);
	}
	return elementsOfList;
};

interface UsersRenderedProps {
	users: Users[];
	loading: boolean;
	error: boolean;
}

export default UsersRendered;
