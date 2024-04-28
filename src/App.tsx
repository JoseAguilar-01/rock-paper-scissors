import { ScoreBanner } from '@components/ScoreBanner';
import { OptionsButtons } from '@components/OptionsButtons/index';
import { Footer } from '@components/Footer';
import { Results } from '@components/Results';
import { useMainProvider } from './hooks/useMainProvider';
import { RulesModal } from '@components/RulesModal';
import styles from '@assets/css/App.module.css';

export const App = () => {
	const { showResults } = useMainProvider();

	return (
		<>
			<RulesModal />

			<div className={styles.container}>
				<ScoreBanner />
				{showResults ? <Results /> : <OptionsButtons />}
				<Footer />
			</div>
		</>
	);
};
