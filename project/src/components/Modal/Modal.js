import Button from '../Button/Button';
import styles from './Modal.module.css';

const Modal = (props) => {
	const buttonHandler = () => {
		props.toggleModal();
	};

	return (
		<div className={styles['backdrop']}>
			<div className={styles['modal']}>
				<h2 className={styles['modal__title']}>{props.title}</h2>
				<p className={styles['modal__content']}>{props.content}</p>
				<div className={styles['modal__button']}>
					<Button text="Okay" onClick={buttonHandler} />
				</div>
			</div>
		</div>
	);
};

export default Modal;
