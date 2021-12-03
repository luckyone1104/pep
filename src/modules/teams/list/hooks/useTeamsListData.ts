import { useListQueryContext } from '../../../../components/List/hooks/useListQueryContext';
import { TeamsListData } from '../types';

export const useTeamsListData = () => {
	return useListQueryContext<TeamsListData>();
};
