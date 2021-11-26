import { useProjectListData } from './useProjectListData';
import { useListPaginationParamsContext } from '../../../../components/List/hooks/useListPaginationParamsContext';

export const useProjectListRows = () => {
	const { data } = useProjectListData();
	const { page } = useListPaginationParamsContext();

	return data?.pages[page]?.items;
};
