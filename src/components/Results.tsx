import { TOptionButton } from '@interfaces/OptionsButtons';
import { TOptions } from '@interfaces/index';
import { useMainProvider } from 'src/hooks/useMainProvider';
import { PaperButton } from './OptionsButtons/PaperButton';
import { RockButton } from './OptionsButtons/RockButton';
import { ScissorsButton } from './OptionsButtons/ScissorsButton';
import styles from '@assets/css/Results.module.css';

export const Results = () => {
	const { selectedOptions, userWin, resetSelectedOptions } = useMainProvider();

	const { homeOption, userOption } = selectedOptions;

	const optionButtons: Record<TOptions, TOptionButton> = {
		paper: PaperButton,
		rock: RockButton,
		scissors: ScissorsButton,
	};

	if (!userOption || !homeOption) return;

	const UserOptionButton = optionButtons[userOption];
	const HomeOptionButton = optionButtons[homeOption];

	return (
		<div className={styles.container}>
			<div className={styles['container__button--user-option']}>
				<div
					className={`${styles.pulse} ${styles['container__container--button']}`}
				>
					<h3 className={styles['container__title--button']}>you picked</h3>
					<UserOptionButton disabled />
				</div>
			</div>

			<div className={styles.container__banner}>
				<h2 className={styles.banner__title}>
					{userWin ? 'YOU WIN' : 'YOU LOSE'}
				</h2>
				<button
					className={styles.banner__button}
					onClick={resetSelectedOptions}
				>
					<p className={styles['button__text--banner']}>PLAY AGAIN</p>
				</button>
			</div>

			<div
				className={`${styles['container__container--button']} ${styles['container__button--house-option']}`}
			>
				<h3 className={styles['container__title--button']}>the house picked</h3>
				<HomeOptionButton disabled />
			</div>
		</div>
	);
};
