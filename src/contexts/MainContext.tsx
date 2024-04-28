import { createContext, useMemo, useState } from 'react';
import { TOptions } from '@interfaces/index';
import {
	IContext,
	ISelectedOptions,
	TMainProvider,
} from '@interfaces/MainProvider';
import { counters, optionList } from 'src/utils/constants';

export const MainContext = createContext<IContext>({
	score: 0,
	selectedOptions: {
		homeOption: '',
		userOption: '',
	},
	userWin: false,
	isTie: false,
	showResults: false,
	showRules: false,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	selectOption: (_userOption: TOptions) => {
		throw new Error('Function not implemented.');
	},
	resetSelectedOptions: () => {
		throw new Error('Function not implemented.');
	},
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	handleShowRules: (_show: boolean) => {
		throw new Error('Function not implemented.');
	},
});

export const MainProvider: TMainProvider = ({ children }) => {
	const [selectedOptions, setSelectedOptions] = useState<ISelectedOptions>({
		userOption: '',
		homeOption: '',
	});
	const [score, setScore] = useState(0);
	const [showRules, setShowRules] = useState(true);

	const userWin = useMemo(() => {
		const { userOption, homeOption } = selectedOptions;

		const result = !!(
			userOption &&
			homeOption &&
			userOption !== homeOption &&
			!counters[userOption].includes(homeOption)
		);

		if (result) {
			setScore(score + 1);
		}

		return result;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selectedOptions.homeOption]);
	const isTie = useMemo(() => {
		const { userOption, homeOption } = selectedOptions;

		return userOption === homeOption;
	}, [selectedOptions]);
	const showResults = useMemo(
		() => !Object.values(selectedOptions).includes(''),
		[selectedOptions]
	);

	const selectOption = (userOption: TOptions) => {
		const randomNumber = Math.floor(
			Math.random() * (optionList.length - 1 - 0 + 1) + 0
		);

		const homeOption = optionList[randomNumber];

		setSelectedOptions({ userOption, homeOption });
	};

	const resetSelectedOptions = () => {
		setSelectedOptions({ userOption: '', homeOption: '' });
	};

	const handleShowRules = (show: boolean) => {
		setShowRules(show);
	};

	const value = {
		selectedOptions,
		score,
		userWin,
		isTie,
		showResults,
		showRules,
		selectOption,
		resetSelectedOptions,
		handleShowRules,
	};

	return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};
