import { useQuery } from 'react-query';
import { ASSESSMENT_GROUPS_URL } from '../const';
import { getAssessmentGroups } from '../api';
import { useNotificationsContext } from '../../../../providers/NotificationsProvider/hooks';

export const useAssessmentGroups = () => {
	const { notify } = useNotificationsContext();
	const query = useQuery(ASSESSMENT_GROUPS_URL, getAssessmentGroups, {
		refetchOnMount: false,
		onError: () => {
			notify('Could not load assessment groups', 'error');
		},
	});

	return {
		...query,
		data: query.data?.map(({ id, name }) => ({
			id,
			value: name,
		})) || [],
	};
};