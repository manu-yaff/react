import styles from './UserList.module.css';
const UserList = (props) => {
	if (props.users.length <= 0) return <p>There are no users</p>;

	return (
		<ul className={styles['user-list']}>
			{props.users.map((user) => {
				return (
					<li key={user.id}>
						{user.name} ({user.age} years old)
					</li>
				);
			})}
		</ul>
	);
};

export default UserList;
