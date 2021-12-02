import { useFieldGroupsListData } from './useFieldGroupsListData';
import { useListPaginationParamsContext } from '../../../../components/List/hooks/useListPaginationParamsContext';

export const useFieldGroupsListRows = () => {
	const { data } = useFieldGroupsListData();
	const { page } = useListPaginationParamsContext();

	return data?.pages[page];
	// return data?.pages[page]?.items;
};
