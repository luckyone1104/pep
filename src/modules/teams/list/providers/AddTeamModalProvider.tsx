import React, { FC, useState } from 'react';
import { AddTeamModalContext } from '../const';

export const AddTeamModalProvider: FC = ({ children }) => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<AddTeamModalContext.Provider
			value={{
				open,
				handleOpen,
				handleClose,
			}}
		>
			{children}
		</AddTeamModalContext.Provider>
	);
};
