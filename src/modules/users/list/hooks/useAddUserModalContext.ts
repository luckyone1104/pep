import { useContext } from 'react';
import { isNull } from 'src/utils/checkers';
import { AddUserModalContext } from '../const';

type AddUserModalContextType = {
	open: boolean;
	handleOpen: () => void;
	handleClose: () => void;
}

export const useAddUserModalContext = () => {
	const context = useContext(AddUserModalContext);

	if (isNull(context)) {
		throw new Error('Please, provide AddUserModalProvider');
	}

	return context as AddUserModalContextType;
};
