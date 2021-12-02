import { useListQueryContext } from '../../../../components/List/hooks/useListQueryContext';
import { FieldGroupsListData } from '../types';

export const useFieldGroupsListData = () => {
	return useListQueryContext<FieldGroupsListData>();
};
