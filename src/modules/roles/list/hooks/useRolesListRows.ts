import { useRolesListData } from './useRolesListData';
import { useListPaginationParamsContext } from '../../../../components/List/hooks/useListPaginationParamsContext';

export const useRolesListRows = () => {
	const { data } = useRolesListData();
	const { page } = useListPaginationParamsContext();

	return data?.pages[page]?.items;
};
