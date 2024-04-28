import { PaperButton } from './PaperButton';
import { ScissorsButton } from './ScissorsButton';
import { RockButton } from './RockButton';
import { useMainProvider } from 'src/hooks/useMainProvider';
import styles from '@assets/css/OptionsButtons.module.css';

export const OptionsButtons = () => {
	const { selectOption } = useMainProvider();

	return (
		<div className={styles.container}>
			<PaperButton onClick={selectOption} />
			<ScissorsButton onClick={selectOption} />
			<RockButton onClick={selectOption} />
		</div>
	);
};
