import React, { FC, useState } from 'react';
import { AddTeamModalContext } from '../const';
import { TeamsListAddTeamModal } from '../components/TeamsListAddTeamModal';

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
			<TeamsListAddTeamModal />
		</AddTeamModalContext.Provider>
	);
};
