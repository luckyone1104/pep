import { FC, useRef } from 'react';
import Portal from '@mui/core/Portal';
import { ProgressBar } from '../ProgressBar';

export const TopProgressBar: FC = () => {
	const portalContainerRef = useRef<HTMLDivElement>(document.querySelector('#top-progress-bar-portal'));

	return (
		<Portal container={portalContainerRef.current}>
			<ProgressBar />
		</Portal>
	);
};