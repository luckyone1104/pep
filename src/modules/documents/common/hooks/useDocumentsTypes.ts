import { useQuery } from 'react-query';
import { DOCUMENTS_TYPES_URL } from '../const';
import { getDocumentsTypes } from '../api';
import { useNotificationsContext } from '../../../../providers/NotificationsProvider/hooks';

export const useDocumentsTypes = () => {
	const { notify } = useNotificationsContext();

	const query = useQuery(DOCUMENTS_TYPES_URL, getDocumentsTypes, {
		refetchOnMount: false,
		onError: () => {
			notify('Could not load documents types', 'error');
		},
	});

	return {
		...query,
		data: query.data || [],
	};
};
