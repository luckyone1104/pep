import { useQuery } from 'react-query';
import { useNotificationsContext } from '../../../../providers/NotificationsProvider/hooks';
import { DOCUMENTS_USERS_URL } from '../const';
import { getDocumentsUsers } from '../api';

export const useDocumentsUsers = () => {
	const { notify } = useNotificationsContext();
	const query = useQuery(DOCUMENTS_USERS_URL, getDocumentsUsers, {
		refetchOnMount: false,
		onError: () => {
			notify('Could not load documents users', 'error');
		},
	});

	return {
		...query,
		data: query.data || [],
	};
};
