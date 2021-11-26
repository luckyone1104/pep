import React, { FC } from 'react';
import { IconButton } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useFilterSidebarContext } from '../../FilterSidebar/FilterSidebarProvider';

export const HeaderRightSide: FC = () => {
	const {
		isSidebarMounted,
		handleSidebarToggle,
	} = useFilterSidebarContext();

	if (!isSidebarMounted) {
		return null;
	}

	return (
		<IconButton
			color="inherit"
			aria-label="open filter sidebar"
			edge="start"
			onClick={handleSidebarToggle}
			sx={{ }}
		>
			<FilterAltIcon />
		</IconButton>
	);
};