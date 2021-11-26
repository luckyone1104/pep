import { useListQueryContext } from '../../../../components/List/hooks/useListQueryContext';
import { ProjectsListDataItem } from '../types';

export const useProjectListData = () => {
	return useListQueryContext<ProjectsListDataItem>();
};
