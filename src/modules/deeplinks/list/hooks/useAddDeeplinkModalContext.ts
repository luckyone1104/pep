import { useContext } from 'react';
import { isNull } from 'src/utils/checkers';
import { AddDeeplinkModalContext } from '../const';

type AddDeeplinkModalContextType = {
	open: boolean;
	handleOpen: () => void;
	handleClose: () => void;
};

export const useAddDeeplinkModalContext = () => {
	const context = useContext(AddDeeplinkModalContext);

	if (isNull(context)) {
		throw new Error('Please, provide AddDeeplinkModalProvider');
	}

	return context as AddDeeplinkModalContextType;
};
