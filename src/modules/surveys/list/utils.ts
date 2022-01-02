import formatISO from 'date-fns/formatISO';
import { SurveysListQueryParam } from './const';
import { SurveysListSidebarFilterValues } from './types';

const getFormattedDate = (value: '' | Date) => {
	return value === '' ? '' : formatISO(value, { representation: 'date' });
};

export const formatFormValues = (values: SurveysListSidebarFilterValues) => {
	return {
		...values,
		[SurveysListQueryParam.AppointmentDateFrom]: getFormattedDate(
			values[SurveysListQueryParam.AppointmentDateFrom]
		),
		[SurveysListQueryParam.AppointmentDateTo]: getFormattedDate(
			values[SurveysListQueryParam.AppointmentDateTo]
		),
	};
};
