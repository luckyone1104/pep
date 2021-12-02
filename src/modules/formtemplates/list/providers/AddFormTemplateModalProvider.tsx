import React, { FC, useState } from 'react';
import { AddFormTemplateModalContext } from '../const';
import { AddFormTemplateModal } from '../components/AddFormTemplateModal';

export const AddFormTemplateModalProvider: FC = ({ children }) => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<AddFormTemplateModalContext.Provider value={{
			open,
			handleOpen,
			handleClose
		}}>
			{children}
			<AddFormTemplateModal />
		</AddFormTemplateModalContext.Provider>
	);
};
