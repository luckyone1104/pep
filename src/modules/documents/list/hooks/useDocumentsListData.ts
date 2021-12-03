import { useListQueryContext } from '../../../../components/List/hooks/useListQueryContext';
import { DocumentsListData } from '../types';

export const useDocumentsListData = () => {
	return useListQueryContext<DocumentsListData>();
};
