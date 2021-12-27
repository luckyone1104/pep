import { useListUrlQueryParamsContext } from '../../../../components/List/hooks/useListUrlQueryParamsContext';
import { FormsListQueryParam, SIDEBAR_FORM_INITIAL_VALUES } from '../const';
import { parseMultiSelectFieldInitialValue } from '../../../../components/adapters/SelectField/utils';

export const useFormsListFilterInitialValues = () => {
	const { urlQueryParams } = useListUrlQueryParamsContext();

	return Object.entries(urlQueryParams)
		.reduce((acc, [key, value]) => {
			if (key === FormsListQueryParam.Search) {
				acc[key] = value as string;
			}

			if (key === FormsListQueryParam.StateId) {
				acc[key] = +value;
			}

			if (
				key === FormsListQueryParam.AssigneeIds ||
				key === FormsListQueryParam.ReviewersIds
			) {
				acc[key] = parseMultiSelectFieldInitialValue(value);
			}

			if (
				key === FormsListQueryParam.AppointmentDateFrom ||
				key === FormsListQueryParam.AppointmentDateTo
			) {
				acc[key] = new Date(value as string);
			}

			return acc;
		}, { ...SIDEBAR_FORM_INITIAL_VALUES });
};
