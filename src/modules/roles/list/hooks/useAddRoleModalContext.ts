import { useContext } from 'react';
import { isNull } from 'src/utils/checkers';
import { AddRoleModalContext } from '../const';

type AddRoleModalContextType = {
	open: boolean;
	handleOpen: () => void;
	handleClose: () => void;
}

export const useAddRoleModalContext = () => {
	const context = useContext(AddRoleModalContext);

	if (isNull(context)) {
		throw new Error('Please, provide AddRoleModalProvider');
	}

	return context as AddRoleModalContextType;
};
