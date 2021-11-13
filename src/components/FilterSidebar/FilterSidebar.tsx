import { FC, useEffect } from 'react';
import {
	Divider,
	Drawer,
	Toolbar,
	Box
} from '@mui/material';
import { FILTER_SIDEBAR_WIDTH } from '../Layout/const';
import { useFilterSidebarContext } from './FilterSidebarProvider';
import { FilterSidebarButtons } from './FilterSidebarButtons';

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
					width: FILTER_SIDEBAR_WIDTH,
					height: '100%',
				},
			}}
		>
			<Toolbar />
			<Divider />
			<Box sx={{
				height: '100%',
				overflow: 'scroll',
				pt: 1,
				pb: 1,
			}}>
				{children}
			</Box>
			<FilterSidebarButtons />
		</Drawer>
	);
};