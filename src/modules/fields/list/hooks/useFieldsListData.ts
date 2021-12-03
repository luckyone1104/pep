import { useListQueryContext } from '../../../../components/List/hooks/useListQueryContext';
import { FieldsListData } from '../types';

export const useFieldsListData = () => {
	return useListQueryContext<FieldsListData>();
};
