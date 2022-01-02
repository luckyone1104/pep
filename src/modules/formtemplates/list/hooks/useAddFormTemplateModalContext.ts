import { useContext } from 'react';
import { isNull } from 'src/utils/checkers';
import { AddFormTemplateModalContext } from '../const';

type AddFormTemplateModalContextType = {
	open: boolean;
	handleOpen: () => void;
	handleClose: () => void;
};

export const useAddFormTemplateModalContext = () => {
	const context = useContext(AddFormTemplateModalContext);

	if (isNull(context)) {
		throw new Error('Please, provide AddFormTemplateModalProvider');
	}

	return context as AddFormTemplateModalContextType;
};
