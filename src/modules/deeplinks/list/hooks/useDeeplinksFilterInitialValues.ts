import { useListUrlQueryParamsContext } from '../../../../components/List/hooks/useListUrlQueryParamsContext';
import { DEEPLINKS_FILTER_INITIAL_VALUES, DeeplinksListQueryParam } from '../const';

export const useDeeplinksFilterInitialValues = () => {
	const { urlQueryParams } = useListUrlQueryParamsContext();

	return Object.entries(urlQueryParams)
		.reduce((acc, [key, value]) => {
			if (key === DeeplinksListQueryParam.StateIds) {
				acc[key] = Array.isArray(value)
					? value.map(i => +i)
					: [+value];
			}

			if (key === DeeplinksListQueryParam.Search ||
				key === DeeplinksListQueryParam.SentToId) {
				acc[key] = value as string;
			}

			return acc;
		}, { ...DEEPLINKS_FILTER_INITIAL_VALUES });
};