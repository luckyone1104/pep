import React, { FC } from 'react';
import { ProjectListAddProjectModalContext } from '../const';
import { ProjectsListAddProjectModal } from '../components/ProjectsListAddProjectModal';

export const ProjectListAddProjectModalProvider: FC = ({ children }) => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<ProjectListAddProjectModalContext.Provider value={{
			open,
			handleOpen,
			handleClose
		}}>
			{children}
			<ProjectsListAddProjectModal />
		</ProjectListAddProjectModalContext.Provider>
	);
};
