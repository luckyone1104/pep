import { useQuery } from 'react-query';
import { DEEPLINKS_USERS_URL } from '../const';
import { getDeeplinksUrl } from '../api';
import { useNotificationsContext } from '../../../../providers/NotificationsProvider/hooks';

export const useDeeplinksUsers = () => {
	const { notify } = useNotificationsContext();
	const query = useQuery(DEEPLINKS_USERS_URL, getDeeplinksUrl, {
		refetchOnMount: false,
		onError: () => {
			notify('Could not load deeplinks users', 'error');
		},
	});

	return {
		...query,
		data: query.data?.map(({ id, name }) => ({
			id,
			value: name,
		})) || [],
	};
};