import { createContext, FC, useMemo, useContext, useState } from 'react';

type FilterSidebarContextValue = {
	sidebarOpen: boolean;
	handleSidebarToggle: () => void;
}

const FilterSidebarContext = createContext(null as unknown);

export const FilterSidebarProvider: FC = ({ children }) => {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	const handleSidebarToggle = () => {
		setSidebarOpen(prev => !prev);
	};

	const value = useMemo(() => ({
		sidebarOpen,
		handleSidebarToggle,
	}), [handleSidebarToggle]);

	return (
		<FilterSidebarContext.Provider value={value}>
			{children}
		</FilterSidebarContext.Provider>
	);
};

export const useFilterSidebarContext = () => useContext(FilterSidebarContext) as FilterSidebarContextValue;