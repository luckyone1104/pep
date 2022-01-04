import React, { FC, useState } from 'react';
import { AddUserModalContext } from '../const';
import { UsersListAddUserModal } from '../components/UsersListAddUserModal';

export const AddUserModalProvider: FC = ({ children }) => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	return (
		<AddUserModalContext.Provider
			value={{
				open,
				handleOpen,
				handleClose,
			}}
		>
			{children}
			<UsersListAddUserModal />
		</AddUserModalContext.Provider>
	);
};
