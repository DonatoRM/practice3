import style from './UserActive.module.css';

const UserActive: React.FC<UserActiveProps> = ({ active }) => {
	const activeClass: string = active ? style.userActive : style.userInactive;
	return (
		<div className={`${style.active} ${activeClass} || ''`}>
			<span>{active ? 'Activo' : 'Inactivo'}</span>
		</div>
	);
};

interface UserActiveProps {
	active: boolean;
}

export default UserActive;
