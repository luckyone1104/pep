import { useListQueryContext } from '../../../../components/List/hooks/useListQueryContext';
import { SurveysListData } from '../types';

export const useSurveysListData = () => {
	return useListQueryContext<SurveysListData>();
};
