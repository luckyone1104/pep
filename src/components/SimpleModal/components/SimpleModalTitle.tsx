import React, { FC } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';
import { SimpleModalProps } from '../SimpleModal';

type SimpleModalTitleProps = Pick<SimpleModalProps, 'title' | 'onClose'>

export const SimpleModalTitle: FC<SimpleModalTitleProps> = (
	{
		title,
		onClose
	}
) => {
	return (
		<Box sx={{
			position: 'relative',
			display: 'flex',
			alignItems: 'center',
			pr: 8,
			minHeight: '40px',
		}}>
			<Typography variant="h6" sx={{ fontWeight: 700 }}>
				{title}
			</Typography>
			<IconButton
				aria-label="close"
				onClick={onClose}
				sx={{
					position: 'absolute',
					top: 0,
					right: 0,
				}}
			>
				<Close />
			</IconButton>
		</Box>
	);
};
