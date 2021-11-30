import { useProjectsListData } from './useProjectsListData';
import { useListPaginationParamsContext } from '../../../../components/List/hooks/useListPaginationParamsContext';

export const useProjectsListRows = () => {
	const { data } = useProjectsListData();
	const { page } = useListPaginationParamsContext();

	return data?.pages[page]?.items;
};
