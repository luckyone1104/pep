import { useMutation } from 'react-query';
import { updateProjectData } from '../api';
import { useNotificationsContext } from '../../../../providers/NotificationsProvider/hooks';
import { useDetailQueryContext } from '../../../../components/Detail/hooks/useDetailQueryContext';

export const useUpdateProjectDataMutation = () => {
	const { notify } = useNotificationsContext();
	const { refetch } = useDetailQueryContext();

	return useMutation(updateProjectData, {
		onSuccess: () => {
			notify('Project has been successfully updated!', 'success');
			refetch();
		},
		onError: () => {
			notify(
				'An error has occurred during updating the project!',
				'error'
			);
		},
	});
};
