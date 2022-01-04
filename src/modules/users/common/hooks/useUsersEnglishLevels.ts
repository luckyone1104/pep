import { useQuery } from 'react-query';
import { USERS_ENGLISH_LEVELS_URL } from '../const';
import { getUsersEnglishLevelsUrl } from '../api';

export const useUsersEnglishLevels = () => {
	const query = useQuery(USERS_ENGLISH_LEVELS_URL, getUsersEnglishLevelsUrl, {
		refetchOnMount: false,
	});

	return {
		...query,
		data: query.data || [],
	};
};
