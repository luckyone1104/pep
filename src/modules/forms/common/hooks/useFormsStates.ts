import { useQuery } from 'react-query';
import { FORMS_STATES_URL } from '../const';
import { getFormsStates } from '../api';

export const useFormsStates = () => {
	const query = useQuery(FORMS_STATES_URL, getFormsStates);

	return {
		...query,
		data: query.data || []
	};
};
