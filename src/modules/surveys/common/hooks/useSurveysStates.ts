import { useQuery } from 'react-query';
import { SURVEYS_STATES_URL } from '../const';
import { getSurveysStates } from '../api';
import { DropdownItem } from '../../../../types';

export const useSurveysStates = () => {
	const query = useQuery<DropdownItem[]>(
		SURVEYS_STATES_URL,
		getSurveysStates
	);

	return {
		...query,
		data: query.data || [],
	};
};
