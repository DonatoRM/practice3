import style from './UserRole.module.css';
import { ROLE_TYPE } from '../../../../../lib/constants/RoleType';

const UserRole: React.FC<UserRoleProps> = ({ role }) => {
	const [userRole, roleClass] = ROLE_CLASS[role] || ROLE_CLASS.other;
	return (
		<div className={style.role}>
			<span className={`${style.roleSpan} ${roleClass} || ''`}>{userRole}</span>
		</div>
	);
};

interface UserRoleProps {
	role: string;
}

const ROLE_CLASS = {
	[ROLE_TYPE.TEACHER]: ['profesor', style.teacher],
	[ROLE_TYPE.STUDENT]: ['alumno', style.student],
	[ROLE_TYPE.OTHER]: ['otro', style.other]
};

export default UserRole;
