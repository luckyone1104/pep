import React, { FC } from 'react';
import { useListUrlQueryParamsContext } from '../List/hooks/useListUrlQueryParamsContext';
import { Box, Chip } from '@mui/material';
import { getChipLabel } from './utils';

export const FilterBreadCrumbs: FC = () => {
	const { urlQueryParams, setUrlQueryParams } = useListUrlQueryParamsContext();

	if (Object.values(urlQueryParams).length === 0) {
		return null;
	}

	const handleDelete = (keyOfDeletedFilter: string) => {
		const newUrlQueryParams = Object.entries(urlQueryParams).reduce((acc, [key, value]) => {
			if (key !== keyOfDeletedFilter) {
				acc[key] = value;
			}

			return acc;
		}, {} as typeof urlQueryParams);

		setUrlQueryParams(newUrlQueryParams);
	};

	return (
		<Box sx={{
			display: 'flex',
			gap: '8px'
		}}>
			{Object.entries(urlQueryParams).map(([key, value]) => (
				<Chip
					key={key}
					label={getChipLabel(key, value)}
					variant="outlined"
					onDelete={() => handleDelete(key)}
				/>
			))}
		</Box>
	);
};
