import React, { FC, useState } from 'react';
import { AddSurveyModalContext } from '../const';

export const AddSurveyModalProvider: FC = ({ children }) => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<AddSurveyModalContext.Provider value={{
			open,
			handleOpen,
			handleClose
		}}>
			{children}
		</AddSurveyModalContext.Provider>
	);
};
