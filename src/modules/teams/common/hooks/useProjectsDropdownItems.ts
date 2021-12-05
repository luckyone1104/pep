import { useQuery } from 'react-query';
import { PROJECTS_DROPDOWN_ITEMS_URL } from '../const';
import { getProjectsDropdownItems } from '../api';
import { useNotificationsContext } from '../../../../providers/NotificationsProvider/hooks';

export const useProjectsDropdownItems = () => {
	const { notify } = useNotificationsContext();
	const query = useQuery(PROJECTS_DROPDOWN_ITEMS_URL, getProjectsDropdownItems, {
		refetchOnMount: false,
		onError: () => {
			notify('Could not load dropdown items', 'error');
		},
	});

	return {
		...query,
		data: query.data || [],
	};
};