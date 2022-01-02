import { createContext, FC, useContext, useState } from 'react';

type FilterSidebarContextValue = {
	isSidebarMounted: boolean;
	setIsSidebarMounted: (state: boolean) => void;
	sidebarOpen: boolean;
	handleSidebarToggle: () => void;
	openSidebar: () => void;
	closeSidebar: () => void;
};

const FilterSidebarContext = createContext(null as unknown);

export const FilterSidebarProvider: FC = ({ children }) => {
	const [isSidebarMounted, setIsSidebarMounted] = useState(false);
	const [sidebarOpen, setSidebarOpen] = useState(false);

	const handleSidebarToggle = () => {
		setSidebarOpen((prev) => !prev);
	};

	const openSidebar = () => {
		setSidebarOpen(true);
	};

	const closeSidebar = () => {
		setSidebarOpen(false);
	};

	return (
		<FilterSidebarContext.Provider
			value={{
				isSidebarMounted,
				setIsSidebarMounted,
				sidebarOpen,
				handleSidebarToggle,
				openSidebar,
				closeSidebar,
			}}
		>
			{children}
		</FilterSidebarContext.Provider>
	);
};

export const useFilterSidebarContext = () =>
	useContext(FilterSidebarContext) as FilterSidebarContextValue;
