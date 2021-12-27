import { useListUrlQueryParamsContext } from '../../../../components/List/hooks/useListUrlQueryParamsContext';
import { SURVEYS_LIST_FILTER_INITIAL_VALUES, SurveysListQueryParam } from '../const';
import { parseMultiSelectFieldInitialValue } from '../../../../components/adapters/SelectField/utils';

export const useSurveysListFilterInitialValues = () => {
	const { urlQueryParams } = useListUrlQueryParamsContext();

	return Object.entries(urlQueryParams)
		.reduce((acc, [key, value]) => {
			if (key === SurveysListQueryParam.StateIds) {
				acc[key] = parseMultiSelectFieldInitialValue(value);
			}

			if (key === SurveysListQueryParam.AssigneeIds) {
				acc[key] = parseMultiSelectFieldInitialValue(value);
			}

			if (key === SurveysListQueryParam.SupervisorIds) {
				acc[key] = parseMultiSelectFieldInitialValue(value);
			}

			if (key === SurveysListQueryParam.Search) {
				acc[key] = value as string;
			}

			if (key === SurveysListQueryParam.AppointmentDateFrom) {
				acc[key] = new Date(value as string);
			}

			if (key === SurveysListQueryParam.AppointmentDateTo) {
				acc[key] = new Date(value as string);
			}

			return acc;
		}, { ...SURVEYS_LIST_FILTER_INITIAL_VALUES });
};
