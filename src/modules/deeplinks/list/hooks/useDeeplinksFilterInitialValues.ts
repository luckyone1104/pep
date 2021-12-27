import { useListUrlQueryParamsContext } from '../../../../components/List/hooks/useListUrlQueryParamsContext';
import { DEEPLINKS_FILTER_INITIAL_VALUES, DeeplinksListQueryParam } from '../const';
import { parseMultiSelectFieldInitialValue } from '../../../../components/adapters/SelectField/utils';

export const useDeeplinksFilterInitialValues = () => {
	const { urlQueryParams } = useListUrlQueryParamsContext();

	return Object.entries(urlQueryParams)
		.reduce((acc, [key, value]) => {
			if (key === DeeplinksListQueryParam.Search) {
				acc[key] = value as string;
			}

			if (key === DeeplinksListQueryParam.SentToId) {
				acc[key] = +value;
			}

			if (
				key === DeeplinksListQueryParam.ExpiresAtFrom ||
				key === DeeplinksListQueryParam.ExpiresAtTo
			) {
				acc[key] = new Date(value as string);
			}

			if (key === DeeplinksListQueryParam.StateIds) {
				acc[key] = parseMultiSelectFieldInitialValue(value);
			}

			return acc;
		}, { ...DEEPLINKS_FILTER_INITIAL_VALUES });
};