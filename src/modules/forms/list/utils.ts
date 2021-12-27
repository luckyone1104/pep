import formatISO from 'date-fns/formatISO';
import { FormsListQueryParam } from './const';
import { FormsSidebarFilterValues } from './types';

const getFormattedDate = (value: '' | Date) => {
	return value === ''
		? ''
		: formatISO(value, { representation: 'date' });
};

export const formatFormValues = (values: FormsSidebarFilterValues) => {
	return {
		...values,
		[FormsListQueryParam.AppointmentDateFrom]: getFormattedDate(values[FormsListQueryParam.AppointmentDateFrom]),
		[FormsListQueryParam.AppointmentDateTo]: getFormattedDate(values[FormsListQueryParam.AppointmentDateTo]),
	};
};
