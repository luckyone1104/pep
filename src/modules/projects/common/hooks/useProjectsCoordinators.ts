import { useQuery } from 'react-query';
import { PROJECTS_COORDINATORS_URL } from '../const';
import { getCoordinators } from '../api';
import { useNotificationsContext } from '../../../../providers/NotificationsProvider/hooks';

export const useProjectsCoordinators = () => {
	const { notify } = useNotificationsContext();

	const query = useQuery(PROJECTS_COORDINATORS_URL, getCoordinators, {
		refetchOnMount: false,
		onError: () => {
			notify('An error has occurred while fetching', 'error');
		},
	});

	return {
		...query,
		data: query.data || [],
	};
};
