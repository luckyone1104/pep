import { useContext } from 'react';
import { isNull } from 'src/utils/checkers';
import { AddDocumentModalContext } from '../const';

type AddDocumentModalContextType = {
	open: boolean;
	handleOpen: () => void;
	handleClose: () => void;
};

export const useAddDocumentModalContext = () => {
	const context = useContext(AddDocumentModalContext);

	if (isNull(context)) {
		throw new Error('Please, provide AddDocumentModalProvider');
	}

	return context as AddDocumentModalContextType;
};
