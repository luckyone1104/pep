import { FC, useEffect } from 'react';
import { Drawer, Toolbar } from '@mui/material';
import { FILTER_SIDEBAR_WIDTH } from '../Layout/const';
import { useFilterSidebarContext } from './FilterSidebarProvider';


export const FilterSidebar: FC = ({ children }) => {
	const { setIsSidebarMounted, sidebarOpen, handleSidebarToggle } = useFilterSidebarContext();

	useEffect(() => {
		setIsSidebarMounted(true);

		return () => {
			setIsSidebarMounted(false);
		};
	});

	return (
		<Drawer
			variant="temporary"
			anchor="right"
			open={sidebarOpen}
			onClose={handleSidebarToggle}
			sx={{
				'& .MuiDrawer-paper': {
					boxSizing: 'border-box',
					width: FILTER_SIDEBAR_WIDTH
				},
			}}
		>
			<Toolbar />
			{children}
		</Drawer>
	);
};