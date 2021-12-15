import formatISO from 'date-fns/formatISO';
import { DocumentsListFilterValues } from './types';
import { DocumentsListQueryParam } from './const';

export const formatFormValues = (values: DocumentsListFilterValues) => {
	const date = values[DocumentsListQueryParam.ValidTo];
	const formattedDate = date === '' ? '' : formatISO(date, { representation: 'date' });

	return {
		...values,
		[DocumentsListQueryParam.ValidTo]: formattedDate,
	};
};
