import React, { FC, useState } from 'react';
import { AddFieldModalContext } from '../const';
import { FieldsListAddFieldModal } from '../components/FieldsListAddFieldModal';

export const AddFieldModalProvider: FC = ({ children }) => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<AddFieldModalContext.Provider
			value={{
				open,
				handleOpen,
				handleClose,
			}}
		>
			{children}
			<FieldsListAddFieldModal />
		</AddFieldModalContext.Provider>
	);
};
