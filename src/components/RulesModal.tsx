import rules from '@assets/images/image-rules.svg';
import closeIcon from '@assets/images/icon-close.svg';
import styles from '@assets/css/RulesModal.module.css';
import { useMainProvider } from 'src/hooks/useMainProvider';

export const RulesModal = () => {
	const { handleShowRules, showRules } = useMainProvider();

	return (
		<div
			className={showRules ? styles.container : styles['container--hidden']}
			onClick={e => {
				const elementId = (e.target as unknown as Record<string, unknown>).id;

				if (elementId === 'rules-modal') {
					handleShowRules(false);
				}
			}}
			id='rules-modal'
		>
			<div className={styles.container__modal}>
				<div className={styles.modal__header}>
					<h2 className={styles.header__title}>RULES</h2>
					<button
						className={styles.header__button}
						onClick={() => handleShowRules(false)}
					>
						<img src={closeIcon} alt='close-icon.svg' />
					</button>
				</div>

				<div className={styles.modal__body}>
					<img className={styles.body__image} src={rules} alt='rules.jpg' />
				</div>
			</div>
		</div>
	);
};
