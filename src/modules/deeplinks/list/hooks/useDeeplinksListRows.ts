import { useDeeplinksListData } from './useDeeplinksListData';
import { useListPaginationParamsContext } from '../../../../components/List/hooks/useListPaginationParamsContext';

export const useDeeplinksListRows = () => {
	const { data } = useDeeplinksListData();
	const { page } = useListPaginationParamsContext();

	return data?.pages[page];
	// return data?.pages[page]?.items;
};
