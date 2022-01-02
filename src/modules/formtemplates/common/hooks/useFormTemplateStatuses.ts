import { useQuery } from 'react-query';
import { FORM_TEMPLATES_STATUSES_URL } from '../const';
import { getFormTemplatesStatuses } from '../api';
import { DropdownItem } from '../../../../types';

export const useFormTemplatesStatuses = () => {
	const query = useQuery<DropdownItem[]>(
		FORM_TEMPLATES_STATUSES_URL,
		getFormTemplatesStatuses
	);

	return {
		...query,
		data: query.data || [],
	};
};
