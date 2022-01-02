import React, { FC } from 'react';
import { ListPaginationParamsProvider } from './ListPaginationParamsProvider';
import { ListUrlQueryParamsProvider } from './ListUrlQueryParamsProvider';
import { ListSortProvider } from './ListSortProvider';
import { ListQueryProvider } from './ListQueryProvider';

type ListProvidersProps = {
	url: string;
	sortFieldsPairs?: string[][];
};

export const ListProviders: FC<ListProvidersProps> = ({
	url,
	sortFieldsPairs = [],
	children,
}) => {
	return (
		<ListPaginationParamsProvider>
			<ListUrlQueryParamsProvider>
				<ListSortProvider sortFieldsPairs={sortFieldsPairs}>
					<ListQueryProvider url={url}>{children}</ListQueryProvider>
				</ListSortProvider>
			</ListUrlQueryParamsProvider>
		</ListPaginationParamsProvider>
	);
};
