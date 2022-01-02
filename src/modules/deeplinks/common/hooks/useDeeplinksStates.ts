import { useQuery } from 'react-query';
import { DEEPLINKS_STATES_URL } from '../const';
import { getDeeplinksStates } from '../api';
import { useNotificationsContext } from '../../../../providers/NotificationsProvider/hooks';

export const useDeeplinksStates = () => {
	const { notify } = useNotificationsContext();
	const query = useQuery(DEEPLINKS_STATES_URL, getDeeplinksStates, {
		refetchOnMount: false,
		onError: () => {
			notify('Could not load deeplinks states', 'error');
		},
	});

	return {
		...query,
		data:
			query.data?.map(({ id, name }) => ({
				id,
				value: name,
			})) || [],
	};
};
