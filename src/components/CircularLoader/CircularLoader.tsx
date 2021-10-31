import { FC } from 'react';
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { usePastDelay } from '../../hooks/usePastDelay';
import { CircularProgressProps } from '@mui/material/CircularProgress/CircularProgress';

export const CircularLoader: FC<CircularProgressProps> = (props) => {
	const pastDelay = usePastDelay();

	if (!pastDelay) {
		return null;
	}

	return (
		<CircularProgress {...props} />
	);
};
