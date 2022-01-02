import React, { FC, useState } from 'react';
import { AddRoleModalContext } from '../const';

export const AddRoleModalProvider: FC = ({ children }) => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<AddRoleModalContext.Provider
			value={{
				open,
				handleOpen,
				handleClose,
			}}
		>
			{children}
		</AddRoleModalContext.Provider>
	);
};
