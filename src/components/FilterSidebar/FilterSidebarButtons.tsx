import React, { FC } from 'react';
import { Box, Button, Divider } from '@mui/material';
import { useFormikContext } from 'formik';
import { useFilterSidebarContext } from './FilterSidebarProvider';
import { CustomObject } from '../../types';
import { getCleanFormValues } from './utils';

export const FilterSidebarButtons: FC = () => {
	const { closeSidebar } = useFilterSidebarContext();
	const { values, submitForm, setValues } = useFormikContext();

	const handleResetForm = () => {
		const cleanValues = getCleanFormValues(values as CustomObject);
		setValues(cleanValues);
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
