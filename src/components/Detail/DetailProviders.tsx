import React, { FC } from 'react';
import { DetailQueryProvider } from './providers/DetailQueryProvider';

export type DetailProvidersProps = {
	url: string;
}

export const DetailProviders: FC<DetailProvidersProps> = (
	{
		url,
		children
	}
) => {
	return (
		<DetailQueryProvider url={url}>
			{children}
		</DetailQueryProvider>
	);
};
