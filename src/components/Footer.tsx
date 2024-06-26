import { useMainProvider } from 'src/hooks/useMainProvider';
import styles from '@assets/css/Footer.module.css';

export const Footer = () => {
	const { handleShowRules } = useMainProvider();

	return (
		<>
			<footer className={styles.container}>
				<button
					className={styles['container__button--rules']}
					onClick={() => handleShowRules(true)}
				>
					<span className={styles['button__text--rules']}>Rules</span>
				</button>
			</footer>
		</>
	);
};
