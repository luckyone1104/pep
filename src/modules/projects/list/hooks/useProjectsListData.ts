import { useListQueryContext } from '../../../../components/List/hooks/useListQueryContext';
import { ProjectsListData } from '../types';

export const useProjectsListData = () => {
	return useListQueryContext<ProjectsListData>();
};
