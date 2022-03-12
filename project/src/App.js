import { useState } from 'react';
import Card from './components/Card/Card';
import AddUser from './components/AddUser/AddUser';
import UserList from './components/UserList/UserList';
import './index.css';

function App() {
	const [users, setUsers] = useState([{ id: 1, name: 'max', age: 20 }]);

	const addUserHandler = (userData) => {
		setUsers((prevState) => {
			return [...prevState, { ...userData, id: Math.random() }];
		});
	};

	return (
		<div>
			<Card>
				<AddUser onAddUser={addUserHandler}></AddUser>
			</Card>
			<Card>
				<UserList users={users}></UserList>
			</Card>
		</div>
	);
}

export default App;
