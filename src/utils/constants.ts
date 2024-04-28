import { TCounters, TOptions } from '@interfaces/index';

export const optionList: TOptions[] = ['paper', 'rock', 'scissors'];

export const counters: TCounters = {
	paper: ['scissors'],
	rock: ['paper'],
	scissors: ['rock'],
};
