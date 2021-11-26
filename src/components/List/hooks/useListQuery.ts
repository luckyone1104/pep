import { useInfiniteQuery } from 'react-query';
import { UseInfiniteQueryResult } from 'react-query/types/react/types';
import { useNotificationsContext } from '../../../providers/NotificationsProvider/hooks';
import { fetchListQueryData } from '../../../api/fetchListQueryData';
import { ListData } from '../types';
import { useListPaginationParamsContext } from './useListPaginationParamsContext';
import { useListUrlQueryParamsContext } from './useListUrlQueryParamsContext';
import { AxiosError } from 'axios';

export const useListQuery = (url: string): UseInfiniteQueryResult<ListData> => {
	const { notify } = useNotificationsContext();
	const { urlQueryParams } = useListUrlQueryParamsContext();
	const { take, totalItemsCount, tryToSetTotalItemsCount } = useListPaginationParamsContext();

	return useInfiniteQuery<ListData, AxiosError>(
		[url, { ...urlQueryParams, take }],
		({ pageParam }) => {
			return fetchListQueryData(
				url,
				{
					...urlQueryParams,
					take,
					skip: pageParam
				}
			);
		},
		{
			getNextPageParam: (page, pages) => {
				const pagesCount = Math.ceil(totalItemsCount / take);

				if (pages.length === pagesCount) {
					return;
				}

				return take * pages.length;
			},
			onSuccess: ({ pages }) => {
				tryToSetTotalItemsCount(pages[pages.length - 1]?.totalItemsCount);
			},
			onError: () => {
				notify('An error has occurred while fetching', 'error');
			},
			keepPreviousData: true,
		}
	);
};
