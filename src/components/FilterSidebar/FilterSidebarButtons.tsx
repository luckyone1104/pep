import React, { FC } from 'react';
import { Box, Button, Divider } from '@mui/material';
import { useFormikContext } from 'formik';
import { useFilterSidebarContext } from './FilterSidebarProvider';
import { CustomObject } from '../../types';

export const FilterSidebarButtons: FC = () => {
	const { closeSidebar } = useFilterSidebarContext();
	const { initialValues, resetForm, submitForm } = useFormikContext();

	const handleResetForm = () => {
		resetForm(initialValues as CustomObject);
		submitForm();
		closeSidebar();
	};

	const handleFormSubmit = () => {
		submitForm();
		closeSidebar();
	};

	return (
		<Box>
			<Divider />
			<Box sx={{
				display: 'flex',
				flexDirection: 'column',
				pt: 1,
				pb: 1,
			}}>
				<Button
					size="large"
					onClick={handleResetForm}
				>
					Clean filters
				</Button>
				<Button
					onClick={handleFormSubmit}
					size="large"
				>
					Apply filters
				</Button>
			</Box>
		</Box>
	);
};
