import { useQuery } from 'react-query';
import { DropdownItem } from '../../../../types';
import { SURVEYS_ASSIGNEES_URL } from '../const';
import { getSurveysAssignees } from '../api';

export const useSurveysAssignees = () => {
	const query = useQuery<DropdownItem[]>(SURVEYS_ASSIGNEES_URL, getSurveysAssignees);

	return {
		...query,
		data: query.data || [],
	};
};