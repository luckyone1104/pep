import { createContext, useContext, FC, useState } from 'react';
import Portal from '@mui/core/Portal';
import { ProgressBar } from '../../components/ProgressBar';

type TopProgressBarContextValue = {
	start: () => void;
	stop: () => void;
}

const TopProgressBarContext = createContext(null as unknown);

export const TopProgressBarProvider: FC = ({ children }) => {
	const [showProgress, setShowProgress] = useState(false);

	const value = {
		start: () => setShowProgress(true),
		stop: () => setShowProgress(false),
	};

	return (
		<TopProgressBarContext.Provider value={value}>
			{showProgress && (
				<Portal container={document.querySelector('#top-progress-bar-portal')}>
					<ProgressBar />
				</Portal>
			)}
			{children}
		</TopProgressBarContext.Provider>
	);
};

export const useTopProgressBarContext = () => useContext(TopProgressBarContext) as TopProgressBarContextValue;