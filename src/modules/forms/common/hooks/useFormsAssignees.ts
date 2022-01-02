import { useQuery } from 'react-query';
import { FORMS_ASSIGNEES_URL } from '../const';
import { getFormsAssignees } from '../api';

export const useFormsAssignees = () => {
	const query = useQuery(FORMS_ASSIGNEES_URL, getFormsAssignees);

	return {
		...query,
		data: query.data || [],
	};
};
