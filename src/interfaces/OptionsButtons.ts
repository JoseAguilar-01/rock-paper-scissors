import { FC } from 'react';
import { TOptions } from '.';

export interface IDefaultOptionButtonProps {
	onClick?: (option: TOptions) => void;
	disabled?: boolean;
}

export type TOptionButton = FC<IDefaultOptionButtonProps>;
export type TPaperButton = FC<IDefaultOptionButtonProps>;
export type TRockButton = FC<IDefaultOptionButtonProps>;
export type TScissorsButton = FC<IDefaultOptionButtonProps>;
