import { useContext } from 'react';
import { isNull } from 'src/utils/checkers';
import { AddFieldModalContext } from '../const';

type AddFieldModalContextType = {
	open: boolean;
	handleOpen: () => void;
	handleClose: () => void;
}

export const useAddFieldModalContext = () => {
	const context = useContext(AddFieldModalContext);

	if (isNull(context)) {
		throw new Error('Please, provide AddFieldModalProvider');
	}

	return context as AddFieldModalContextType;
};
