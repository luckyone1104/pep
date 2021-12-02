import React, { FC, useState } from 'react';
import { AddFieldGroupContext } from '../const';

export const AddFieldGroupModalProvider: FC = ({ children }) => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<AddFieldGroupContext.Provider value={{
			open,
			handleOpen,
			handleClose
		}}>
			{children}
		</AddFieldGroupContext.Provider>
	);
};
