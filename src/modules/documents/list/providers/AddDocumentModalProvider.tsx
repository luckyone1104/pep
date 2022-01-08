import React, { FC, useState } from 'react';
import { AddDocumentModalContext } from '../const';
import { DocumentsListAddDocumentModal } from '../components/DocumentsListAddDocumentModal';

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
			<DocumentsListAddDocumentModal />
		</AddDocumentModalContext.Provider>
	);
};
