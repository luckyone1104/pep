import { useQuery } from 'react-query';
import { FIELDS_TYPES_URL } from '../const';
import { getFieldsTypes } from '../api';
import { useNotificationsContext } from '../../../../providers/NotificationsProvider/hooks';

export const useFieldsTypes = () => {
	const { notify } = useNotificationsContext();
	const query = useQuery(FIELDS_TYPES_URL, getFieldsTypes, {
		refetchOnMount: false,
		onError: () => {
			notify('Could not load field types', 'error');
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
