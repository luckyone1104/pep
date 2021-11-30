import { useListQueryContext } from '../../../../components/List/hooks/useListQueryContext';
import { ProjectsListDataItem } from '../types';

export const useProjectsListData = () => {
	return useListQueryContext<ProjectsListDataItem>();
};
