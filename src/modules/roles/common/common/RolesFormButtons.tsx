import React, { FC } from 'react';
import { SimpleModalButtonsLayout } from '../../../../components/SimpleModal';
import { Box, Button, CircularProgress } from '@mui/material';

type RolesFormButtonsProps = {
	onClose: () => void;
	submitButtonText?: string;
	isLoading?: boolean;
}

export const RolesFormButtons: FC<RolesFormButtonsProps> = ({
	onClose,
	submitButtonText,
	isLoading
}) => {
	return (
		<SimpleModalButtonsLayout>
			<Button onClick={onClose} disabled={isLoading}>
				Cancel
			</Button>
			<Box sx={{ position: 'relative' }}>
				<Button type="submit" disabled={isLoading}>
					{submitButtonText}
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
		</SimpleModalButtonsLayout>
	);
};