import { ReactNode, FC } from 'react';
import { TOptions } from '.';

export interface IContext {
	selectedOptions: ISelectedOptions;
	score: number;
	userWin: boolean;
	isTie: boolean;
	showResults: boolean;
	showRules: boolean;
	selectOption: (userOption: TOptions) => void;
	resetSelectedOptions: () => void;
	handleShowRules: (show: boolean) => void;
}
export interface IMainProviderProps {
	children: ReactNode;
}
export interface ISelectedOptions {
	userOption: TOptions | '';
	homeOption: TOptions | '';
}

export type TMainProvider = FC<IMainProviderProps>;
