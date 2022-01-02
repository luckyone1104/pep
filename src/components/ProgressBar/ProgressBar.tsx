import { FC } from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { usePastDelay } from '../../hooks/usePastDelay';

export const ProgressBar: FC = () => {
	const pastDelay = usePastDelay();

	if (!pastDelay) {
		return null;
	}

	return (
		<Box sx={{ width: '100%' }}>
			<LinearProgress />
		</Box>
	);
};
