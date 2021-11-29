import React, { FC } from 'react';
import { Form } from 'formik';
import Box from '@mui/material/Box';
import { FilterSidebarButtons } from './FilterSidebarButtons';
import { Divider, IconButton, Toolbar } from '@mui/material';
import classes from './styles/form.module.scss';
import { useFilterSidebarContext } from './FilterSidebarProvider';
import CloseIcon from '@mui/icons-material/Close';

export const FilterSidebarForm: FC = ({ children }) => {
	const { closeSidebar } = useFilterSidebarContext();

	return (
		<Form className={classes.form}>
			<Box sx={{
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
			}}>
				<Box sx={{
					flexGrow: 1,
					overflow: 'auto',
				}}>
					<Toolbar sx={{
						display: 'flex',
						justifyContent: 'end',
					}}>
						<IconButton
							onClick={closeSidebar}
							sx={{
								display: { xs: 'inline-flex', sm: 'none' },
							}}
						>
							<CloseIcon />
						</IconButton>
					</Toolbar>
					<Divider />
					<Box sx={{
						p: 2,
						display: 'flex',
						flexDirection: 'column',
						gap: 2,
					}}>
						{children}
					</Box>
				</Box>
				<FilterSidebarButtons />
			</Box>
		</Form>
	);
};
