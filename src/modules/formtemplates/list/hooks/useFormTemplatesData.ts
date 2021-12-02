import { useListQueryContext } from '../../../../components/List/hooks/useListQueryContext';
import { FormTemplatesListData } from '../types';

export const useFormTemplatesData = () => {
	return useListQueryContext<FormTemplatesListData>();
};
