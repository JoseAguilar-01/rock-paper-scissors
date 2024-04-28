import styles from '@assets/css/OptionsButtons.module.css';
import { TPaperButton } from '@interfaces/OptionsButtons';

export const PaperButton: TPaperButton = ({ onClick, disabled }) => {
	return (
		<button
			className={`
			${styles['container__button--paper']} 
			${disabled ? styles['container__button--disabled'] : styles.container__button}
			`}
			onClick={() => onClick?.('paper')}
			disabled={disabled}
		></button>
	);
};
