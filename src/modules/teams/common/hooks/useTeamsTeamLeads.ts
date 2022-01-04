import { useNotificationsContext } from '../../../../providers/NotificationsProvider/hooks';
import { useQuery } from 'react-query';
import { PROJECTS_TEAM_LEADS_URL } from '../const';
import { getTeamsTeamLeads } from '../api';

export const useTeamsTeamLeads = () => {
	const { notify } = useNotificationsContext();
	const query = useQuery(PROJECTS_TEAM_LEADS_URL, getTeamsTeamLeads, {
		refetchOnMount: false,
		onError: () => {
			notify('Could not load team leads', 'error');
		},
	});

	return {
		...query,
		data: query.data || [],
	};
};
