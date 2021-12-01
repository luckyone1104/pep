import { FC, useEffect } from 'react';
import { Drawer, useTheme } from '@mui/material';
import { FILTER_SIDEBAR_WIDTH } from '../AppLayout/const';
import { useFilterSidebarContext } from './FilterSidebarProvider';
import { Form, Formik } from 'formik';
import { FilterSidebarFormLayout } from './FilterSidebarFormLayout';
import { CustomObject } from '../../types';
import { ErrorBoundary } from '../ErrorBoundary';
import classes from './styles/form.module.scss';

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
	}, [setIsSidebarMounted]);


	return (
		<Drawer
			variant="temporary"
			anchor="right"
			open={sidebarOpen}
			onClose={handleSidebarToggle}
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
			<Formik
				initialValues={initialValues}
				onSubmit={onSubmit}
				enableReinitialize
			>
				<Form className={classes.form}>
					<FilterSidebarFormLayout>
						<ErrorBoundary>
							{children}
						</ErrorBoundary>
					</FilterSidebarFormLayout>
				</Form>
			</Formik>
		</Drawer>
	);
};
