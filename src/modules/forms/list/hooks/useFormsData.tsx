import { useListQueryContext } from '../../../../components/List/hooks/useListQueryContext';
import { FormsListData } from '../types';

export const useFormsData = () => {
	return useListQueryContext<FormsListData>();
};
