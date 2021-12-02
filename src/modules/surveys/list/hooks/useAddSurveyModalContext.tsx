import { useContext } from 'react';
import { isNull } from 'src/utils/checkers';
import { AddSurveyModalContext } from '../const';

type AddSurveyModalContextType = {
	open: boolean;
	handleOpen: () => void;
	handleClose: () => void;
}

export const useAddSurveyModalContext = () => {
	const context = useContext(AddSurveyModalContext);

	if (isNull(context)) {
		throw new Error('Please, provide AddSurveysModalProvider');
	}

	return context as AddSurveyModalContextType;
};
