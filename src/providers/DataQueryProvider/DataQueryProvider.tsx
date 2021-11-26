import React, { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient({
	defaultOptions:  {
		queries: {
			refetchOnWindowFocus: false,
			retry: false,
		},
	},
});

export const DataQueryProvider: FC = ({ children }) => {

	return (
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools />
			{children}
		</QueryClientProvider>
	);
};
