import { useMutation } from 'react-query';
import { postProject } from '../api';
import { useNotificationsContext } from '../../../../providers/NotificationsProvider/hooks';
import { useProjectsListAddProjectModalContext } from './useProjectsListAddProjectModalContext';
import { useListQueryContext } from '../../../../components/List/hooks/useListQueryContext';

export const useAddProjectMutation = () => {
	const { notify } = useNotificationsContext();
	const { handleClose: closeModal } = useProjectsListAddProjectModalContext();
	const { refetch } = useListQueryContext();

	return useMutation(postProject, {
		onSuccess: () => {
			notify('Project has been successfully created!', 'success');
			refetch();
		},
		onError: () => {
			notify('An error has occurred during creating project!', 'error');
		},
		onSettled: closeModal
	});
};
