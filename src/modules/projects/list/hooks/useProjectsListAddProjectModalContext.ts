import { useContext } from 'react';
import { ProjectListAddProjectModalContext } from '../const';
import { isNull } from '../../../../utils';

type ProjectListAddProjectModalContextType = {
	open: boolean;
	handleOpen: () => void;
	handleClose: () => void;
}

export const useProjectsListAddProjectModalContext = () => {
	const context = useContext(ProjectListAddProjectModalContext);

	if (isNull(context)) {
		throw new Error('Please, provide ProjectListAddProjectModalProvider');
	}

	return context as ProjectListAddProjectModalContextType;
};
