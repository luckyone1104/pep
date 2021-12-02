import { useFormTemplatesData } from './useFormTemplatesData';
import { useListPaginationParamsContext } from '../../../../components/List/hooks/useListPaginationParamsContext';

export const useFormTemplatesRows = () => {
	const { data } = useFormTemplatesData();
	const { page } = useListPaginationParamsContext();

	return data?.pages[page]?.items;
};
