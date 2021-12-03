import React, { FC, useState } from 'react';
import { AddDeeplinkModalContext } from '../const';

export const AddDeeplinkModalProvider: FC = ({ children }) => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<AddDeeplinkModalContext.Provider value={{
			open,
			handleOpen,
			handleClose
		}}>
			{children}
		</AddDeeplinkModalContext.Provider>
	);
};
