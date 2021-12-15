import { useListUrlQueryParamsContext } from '../../../../components/List/hooks/useListUrlQueryParamsContext';
import { DOCUMENTS_FILTER_INITIAL_VALUES, DocumentsListQueryParam } from '../const';

export const useDocumentsListFilterInitialValues = () => {
	const { urlQueryParams } = useListUrlQueryParamsContext();

	return Object.entries(urlQueryParams)
		.reduce((acc, [key, value]) => {
			if (key === DocumentsListQueryParam.Search) {
				acc[key] = value as string;
			}

			if (key === DocumentsListQueryParam.UserIds) {
				acc[key] = Array.isArray(value)
					? value.map(i => +i)
					: [+value];
			}

			if (key === DocumentsListQueryParam.TypeIds) {
				acc[key] = Array.isArray(value)
					? value.map(i => +i)
					: [+value];
			}

			if (key === DocumentsListQueryParam.ValidTo) {
				acc[key] = new Date(value as string);
			}

			return acc;
		}, { ...DOCUMENTS_FILTER_INITIAL_VALUES });
};
