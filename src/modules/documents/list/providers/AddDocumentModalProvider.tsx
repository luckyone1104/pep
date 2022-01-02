import React, { FC, useState } from 'react';
import { AddDocumentModalContext } from '../const';

export const AddDocumentModalProvider: FC = ({ children }) => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<AddDocumentModalContext.Provider
			value={{
				open,
				handleOpen,
				handleClose,
			}}
		>
			{children}
		</AddDocumentModalContext.Provider>
	);
};
