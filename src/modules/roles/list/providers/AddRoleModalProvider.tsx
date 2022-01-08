import React, { FC, useState } from 'react';
import { AddRoleModalContext } from '../const';
import { RolesListAddRoleModal } from '../components/RolesListAddRoleModal';

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
			<RolesListAddRoleModal />
		</AddRoleModalContext.Provider>
	);
};
