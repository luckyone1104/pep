import React, { FC } from 'react';
import { Box, Button, CircularProgress } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import { useFormikContext } from 'formik';

type ProjectsDetailFormButtonsProps = {
	isLoading: boolean;
};

export const ProjectsDetailFormButtons: FC<ProjectsDetailFormButtonsProps> = ({
	isLoading,
}) => {
	const { dirty } = useFormikContext();

	return (
		<Box
			sx={{
				pt: 3,
				display: 'flex',
				justifyContent: 'flex-end',
			}}
		>
			<Box sx={{ m: 1, position: 'relative' }}>
				<Button
					type="submit"
					variant="outlined"
					startIcon={<SaveIcon />}
					disabled={!dirty || isLoading}
				>
					Save
				</Button>
				{isLoading && (
					<CircularProgress
						size={24}
						sx={{
							position: 'absolute',
							top: '50%',
							left: '50%',
							marginTop: '-12px',
							marginLeft: '-12px',
						}}
					/>
				)}
			</Box>
		</Box>
	);
};
