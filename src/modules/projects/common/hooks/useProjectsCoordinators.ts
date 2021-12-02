import { useQuery } from 'react-query';
import { PROJECTS_COORDINATORS_URL } from '../const';
import { getCoordinators } from '../api';

export const useProjectsCoordinators = () => {
	const query = useQuery(PROJECTS_COORDINATORS_URL, getCoordinators, {
		refetchOnMount: false
	});

	return {
		...query,
		data: query.data || []
	};
};
