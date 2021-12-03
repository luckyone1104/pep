import { useListQueryContext } from '../../../../components/List/hooks/useListQueryContext';
import { RolesListData } from '../types';

export const useRolesListData = () => {
	return useListQueryContext<RolesListData>();
};
