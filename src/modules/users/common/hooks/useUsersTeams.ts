import { useQuery } from 'react-query';
import { USERS_TEAMS_URL } from '../const';
import { getUsersTeamsUrl } from '../api';

export const useUsersTeams = () => {
	const query = useQuery(USERS_TEAMS_URL, getUsersTeamsUrl, {
		refetchOnMount: false,
	});

	return {
		...query,
		data: query.data || [],
	};
};
