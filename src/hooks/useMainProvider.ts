import { useContext } from 'react';
import { MainContext } from 'src/contexts/MainContext';

export const useMainProvider = () => {
	return useContext(MainContext);
};
