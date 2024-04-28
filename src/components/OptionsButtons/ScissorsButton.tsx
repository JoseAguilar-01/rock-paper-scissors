import styles from '@assets/css/OptionsButtons.module.css';
import { TScissorsButton } from '@interfaces/OptionsButtons';

export const ScissorsButton: TScissorsButton = ({ onClick, disabled }) => {
	return (
		<button
			className={`
		${styles['container__button--scissors']} 
		${disabled ? styles['container__button--disabled'] : styles.container__button}
		`}
			onClick={() => onClick?.('scissors')}
			disabled={disabled}
		></button>
	);
};
