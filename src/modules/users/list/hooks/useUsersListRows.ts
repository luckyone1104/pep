import { useUsersListData } from './useUsersListData';
import { useListPaginationParamsContext } from '../../../../components/List/hooks/useListPaginationParamsContext';

export const useUsersListRows = () => {
	const { data } = useUsersListData();
	const { page } = useListPaginationParamsContext();

	return data?.pages[page];
	// return data?.pages[page]?.items;
};
