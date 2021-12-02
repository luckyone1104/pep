import { useQuery } from 'react-query';
import { FORM_TEMPLATES_STATUSES_URL } from '../const';
import { getStatuses } from '../api';

export const useFormTemplatesStatuses = () => {
	const query = useQuery(FORM_TEMPLATES_STATUSES_URL, getStatuses);

	return {
		...query,
		data: query.data || []
	};
};
