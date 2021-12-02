import { useContext } from 'react';
import { isNull } from 'src/utils/checkers';
import { AddFieldGroupContext } from '../const';

type AddFieldGroupContextType = {
	open: boolean;
	handleOpen: () => void;
	handleClose: () => void;
}

export const useAddFieldGroupContext = () => {
	const context = useContext(AddFieldGroupContext);

	if (isNull(context)) {
		throw new Error('Please, provide AddFieldGroupProvider');
	}

	return context as AddFieldGroupContextType;
};
