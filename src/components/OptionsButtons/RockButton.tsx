import styles from '@assets/css/OptionsButtons.module.css';
import { TRockButton } from '@interfaces/OptionsButtons';

export const RockButton: TRockButton = ({ onClick, disabled }) => {
	return (
		<button
			className={`
		${styles['container__button--rock']} 
		${disabled ? styles['container__button--disabled'] : styles.container__button}
		`}
			onClick={() => onClick?.('rock')}
			disabled={disabled}
		></button>
	);
};
