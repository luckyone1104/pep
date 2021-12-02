import { useFormsData } from './useFormsData';
import { useListPaginationParamsContext } from '../../../../components/List/hooks/useListPaginationParamsContext';

export const useFormsRows = () => {
	const { data } = useFormsData();
	const { page } = useListPaginationParamsContext();

	return data?.pages[page];
	// return data?.pages[page]?.items;
};
