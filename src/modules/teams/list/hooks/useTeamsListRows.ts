import { useTeamsListData } from './useTeamsListData';
import { useListPaginationParamsContext } from '../../../../components/List/hooks/useListPaginationParamsContext';

export const useTeamsListRows = () => {
	const { data } = useTeamsListData();
	const { page } = useListPaginationParamsContext();

	return data?.pages[page];
	// return data?.pages[page]?.items;
};
