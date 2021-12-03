import { useFieldsListData } from './useFieldsListData';
import { useListPaginationParamsContext } from '../../../../components/List/hooks/useListPaginationParamsContext';

export const useFieldsListRows = () => {
	const { data } = useFieldsListData();
	const { page } = useListPaginationParamsContext();

	return data?.pages[page];
	// return data?.pages[page]?.items;
};
