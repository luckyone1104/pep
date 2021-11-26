import React, { FC } from 'react';
import { Box, Button, Typography } from '@mui/material';

type ListHeaderProps = {
	listTitle: string;
	buttonTitle?: string;
	onButtonClick: () => void;
}

export const ListHeader: FC<ListHeaderProps> = (
	{
		listTitle,
		buttonTitle = 'Add',
		onButtonClick,
	}
) => {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
			}}
		>
			<Typography variant="h4">
				{listTitle}
			</Typography>
			<Button
				variant="contained"
				size="large"
				onClick={onButtonClick}
			>
				{buttonTitle}
			</Button>
		</Box>
	);
};