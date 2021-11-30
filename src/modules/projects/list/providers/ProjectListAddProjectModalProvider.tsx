import React, { FC } from 'react';
import { ProjectListAddProjectModalContext } from '../const';
import { ProjectsListHeaderAddProjectModal } from '../components/ProjectsListHeaderAddProjectModal';

export const ProjectListAddProjectModalProvider: FC = ({ children }) => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<ProjectListAddProjectModalContext.Provider value={{
			handleOpen,
			handleClose
		}}>
			{children}
			<ProjectsListHeaderAddProjectModal
				open={open}
				onClose={handleClose}
			/>
		</ProjectListAddProjectModalContext.Provider>
	);
};
