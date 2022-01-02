import { useQuery } from 'react-query';
import { DropdownItem } from '../../../../types';
import { SURVEYS_SUPERVISORS_URL } from '../const';
import { getSurveysSupervisors } from '../api';

export const useSurveysSupervisors = () => {
	const query = useQuery<DropdownItem[]>(
		SURVEYS_SUPERVISORS_URL,
		getSurveysSupervisors
	);

	return {
		...query,
		data: query.data || [],
	};
};
