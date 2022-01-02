import React, { FC } from 'react';
import { ListQueryContext } from './const';
import { useListQuery } from '../hooks/useListQuery';

type ListQueryProviderProps = {
	url: string;
};

export const ListQueryProvider: FC<ListQueryProviderProps> = ({
	url,
	children,
}) => {
	const query = useListQuery(url);

	return (
		<ListQueryContext.Provider value={query}>
			{children}
		</ListQueryContext.Provider>
	);
};
