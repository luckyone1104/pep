import { useQuery } from 'react-query';
import { PROJECTS_COORDINATORS_QUERY_KEY } from '../const';
import { fetchCoordinators } from '../api';

export const useProjectsCoordinators = () => {
	const query = useQuery(PROJECTS_COORDINATORS_QUERY_KEY, fetchCoordinators, {
		refetchOnMount: false
	});

	return {
		...query,
		data: query.data || []
	};
};
