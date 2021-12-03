import { useDeeplinksListData } from '../../../deeplinks/list/hooks/useDeeplinksListData';
import { useListPaginationParamsContext } from '../../../../components/List/hooks/useListPaginationParamsContext';

export const useDocumentsListRows = () => {
	const { data } = useDeeplinksListData();
	const { page } = useListPaginationParamsContext();

	return data?.pages[page];
	// return data?.pages[page]?.items;
};
