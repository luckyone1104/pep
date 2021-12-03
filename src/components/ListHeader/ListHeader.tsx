import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';

type ListHeaderProps = {
	listTitle: string | JSX.Element;
	rightSide?: JSX.Element;
}

export const ListHeader: FC<ListHeaderProps> = (
	{
		listTitle,
		rightSide,
	},
) => {
	return (
		<Box sx={{
			display: 'flex',
			justifyContent: 'space-between',
			minHeight: '36px',
		}}>
			<Typography
				variant="h5"
				sx={{
					fontWeight: 700,
				}}
			>
				{listTitle}
			</Typography>
			{rightSide}
		</Box>
	);
};
