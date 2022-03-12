import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import styles from './AddUser.module.css';
import { useState } from 'react';

const AddUser = (props) => {
	const [userData, setUserData] = useState({ name: '', age: '' });
	const [error, setError] = useState('');

	const nameHandler = (event) => {
		setUserData((prevState) => {
			return { ...prevState, name: event.target.value };
		});
	};

	const ageHandler = (event) => {
		setUserData((prevState) => {
			return { ...prevState, age: event.target.value };
		});
	};

	const submitFormHandler = (event) => {
		event.preventDefault();
		if (userData.name.trim().length === 0 || userData.age.trim().length === 0) {
			setError('Please enter a valid name and age(non-empty values)');
			return;
		}
		if (+userData.age < 1) {
			setError('Please enter a valid age (>0)');
			return;
		}
		props.onAddUser(userData);
		setUserData({ name: '', age: '' });
	};

	const modalHandler = () => {
		setError('');
	};

	return (
		<>
			{error && (
				<Modal
					title="Invalid input"
					content={error}
					toggleModal={modalHandler}
				/>
			)}
			<form onSubmit={submitFormHandler} className={styles['user-input-form']}>
				<div>
					<label>Username</label>
					<input type="text" value={userData.name} onChange={nameHandler} />
				</div>
				<div>
					<label>Age (years)</label>
					<input type="text" value={userData.age} onChange={ageHandler} />
				</div>
				<Button text="Add user" type="submit"></Button>
			</form>
		</>
	);
};

export default AddUser;
