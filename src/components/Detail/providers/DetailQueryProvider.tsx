import React, { FC } from 'react';
import { DetailQueryContext } from '../const';
import { useDetailQuery } from '../hooks/useDetailQuery';
import { DetailProvidersProps } from '../DetailProviders';
import Alert from '@mui/material/Alert';

type DetailQueryProviderProps = Pick<DetailProvidersProps, 'url'>

export const DetailQueryProvider: FC<DetailQueryProviderProps> = (
	{
		url,
		children
	}
) => {
	const query = useDetailQuery(url);

	if (query.isError) {
		return (
			<Alert severity="error">
				An error has occurred while fetching detail information!
			</Alert>
		);
	}

	return (
		<DetailQueryContext.Provider value={query}>
			{children}
		</DetailQueryContext.Provider>
	);
};
