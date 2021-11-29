import { FC, useEffect } from 'react';
import { Drawer, useTheme } from '@mui/material';
import { FILTER_SIDEBAR_WIDTH } from '../AppLayout/const';
import { useFilterSidebarContext } from './FilterSidebarProvider';
import { Formik } from 'formik';
import { FilterSidebarForm } from './FilterSidebarForm';
import { CustomObject } from '../../types';
import { ErrorBoundary } from '../ErrorBoundary';

type FilterSidebarProps = {
	initialValues: CustomObject,
	onSubmit: (values: CustomObject) => void
}

export const FilterSidebar: FC<FilterSidebarProps> = (
	{
		initialValues,
		onSubmit,
		children,
	},
) => {
	const theme = useTheme();
	const {
		setIsSidebarMounted,
		sidebarOpen,
		handleSidebarToggle,
	} = useFilterSidebarContext();

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
			ModalProps={{
				keepMounted: true,
			}}
			sx={{
				zIndex: theme.zIndex.drawer + 1,
				'& .MuiDrawer-paper': {
					boxSizing: 'border-box',
					width: {
						xs: '100%',
						sm: FILTER_SIDEBAR_WIDTH,
					},
					height: '100%',
				},
			}}
		>
			<ErrorBoundary>
				<Formik
					initialValues={initialValues}
					onSubmit={onSubmit}
					enableReinitialize
				>
					<FilterSidebarForm>
						{children}
					</FilterSidebarForm>
				</Formik>
			</ErrorBoundary>
		</Drawer>
	);
};
