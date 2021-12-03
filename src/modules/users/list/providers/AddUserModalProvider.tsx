import React, { FC, useState } from 'react';
import { AddUserModalContext } from '../const';

export const AddUserModalProvider: FC = ({ children }) => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	return (
		<AddUserModalContext.Provider value={{
			open,
			handleOpen,
			handleClose
		}}>
			{children}
		</AddUserModalContext.Provider>
	);
};
