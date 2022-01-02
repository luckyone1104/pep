import { UsersListFilterValues } from './types';
import { UsersListQueryParam } from './const';
import formatISO from 'date-fns/formatISO';

export const formatFormValues = (values: UsersListFilterValues) => {
	const date = values[UsersListQueryParam.NextPEDate];
	const formattedDate =
		date === '' ? '' : formatISO(date, { representation: 'date' });

	return {
		...values,
		[UsersListQueryParam.NextPEDate]: formattedDate,
	};
};
