import { useListQueryContext } from '../../../../components/List/hooks/useListQueryContext';
import { DeeplinksListData } from '../types';

export const useDeeplinksListData = () => {
	return useListQueryContext<DeeplinksListData>();
};
