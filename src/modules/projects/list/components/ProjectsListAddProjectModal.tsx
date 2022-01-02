import React, { FC } from 'react';
import { SimpleModal } from '../../../../components/SimpleModal';
import { ProjectsListAddProjectForm } from './ProjectsListAddProjectForm';
import { useProjectsListAddProjectModalContext } from '../hooks/useProjectsListAddProjectModalContext';

export const ProjectsListAddProjectModal: FC = () => {
	const { open, handleClose } = useProjectsListAddProjectModalContext();

	return (
		<SimpleModal title="Add project" open={open} onClose={handleClose}>
			<ProjectsListAddProjectForm />
		</SimpleModal>
	);
};
