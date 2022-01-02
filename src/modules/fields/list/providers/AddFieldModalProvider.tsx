import React, { FC, useState } from 'react';
import { AddFieldModalContext } from '../const';

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
		</AddFieldModalContext.Provider>
	);
};
