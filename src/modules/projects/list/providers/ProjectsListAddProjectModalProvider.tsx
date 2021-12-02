import { FC, useState } from 'react';
import { ProjectListAddProjectModalContext } from '../const';
import { ProjectsListAddProjectModal } from '../components/ProjectsListAddProjectModal';

export const ProjectsListAddProjectModalProvider: FC = ({ children }) => {
	const [open, setOpen] = useState(false);
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
