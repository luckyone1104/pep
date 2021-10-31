import { FC } from 'react';
import { Drawer, Toolbar } from '@mui/material';
import { FILTER_SIDEBAR_WIDTH } from '../Layout/const';
import { useFilterSidebarContext } from '../../providers/AppProviders/FilterSidebarProvider';

const container = window !== undefined ? () => window.document.body : undefined;

export const FilterSidebar: FC = () => {
	const { sidebarOpen, handleSidebarToggle } = useFilterSidebarContext();

	return (
		<Drawer
			container={container}
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
			any
		</Drawer>
	);
};