import React, { FC } from 'react';
import { Box, Button, Divider } from '@mui/material';

export const FilterSidebarButtons: FC = () => {
	return (
		<Box>
			<Divider />
			<Box sx={{
				display: 'flex',
				flexDirection: 'column',
				pt: 1,
				pb: 1,
			}}>
				<Button
					size="large"
				>
					Clean filters
				</Button>
				<Button
					size="large"
				>
					Apply filters
				</Button>
			</Box>
		</Box>
	);
};