import { useQuery } from 'react-query';
import { getUsersTechLevelsUrl } from '../api';
import { USERS_TECH_LEVELS_URL } from '../const';

export const useUsersTechLevels = () => {
	const query = useQuery(USERS_TECH_LEVELS_URL, getUsersTechLevelsUrl, {
		refetchOnMount: false,
	});

	return {
		...query,
		data: query.data || [],
	};
};
