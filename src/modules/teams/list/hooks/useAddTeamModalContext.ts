import { useContext } from 'react';
import { isNull } from 'src/utils/checkers';
import { AddTeamModalContext } from '../const';

type AddTeamModalContextType = {
	open: boolean;
	handleOpen: () => void;
	handleClose: () => void;
};

export const useAddTeamModalContext = () => {
	const context = useContext(AddTeamModalContext);

	if (isNull(context)) {
		throw new Error('Please, provide AddTeamModalProvider');
	}

	return context as AddTeamModalContextType;
};
