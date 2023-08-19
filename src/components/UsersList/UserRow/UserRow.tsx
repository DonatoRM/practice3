import style from './UserRow.module.css';
import UserActive from './UserActive/UserActive';
import UserRole from './UserRole/UserRole';

const UserRow: React.FC<UserRowProps> = ({ name, active, role }) => {
	return (
		<div className={style.wrapper}>
			<div className={style.name}>
				<span>{name}</span>
			</div>
			<UserActive active={active} />
			<UserRole role={role} />
		</div>
	);
};

interface UserRowProps {
	name: string;
	active: boolean;
	role: string;
}

export default UserRow;
