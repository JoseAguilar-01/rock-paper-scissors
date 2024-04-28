import { useMainProvider } from 'src/hooks/useMainProvider';
import styles from '@assets/css/ScoreBanner.module.css';

export const ScoreBanner = () => {
	const { score } = useMainProvider();

	return (
		<header className={styles.container}>
			<h1 className={styles.header__title}>
				ROCK <br /> PAPER <br /> SCISSORS
			</h1>

			<div className={styles['container__container--score']}>
				<p className={styles['container__subtitle--score']}>score</p>
				<p className={styles['container__number--score']}>{score}</p>
			</div>
		</header>
	);
};
