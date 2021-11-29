import React, { FC, ReactElement } from 'react';
import { Box, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';

export type SimpleModalProps = {
	title?: string;
	open: boolean;
	onClose: () => void;
	actionButtons?: ReactElement[]
}

export const SimpleModal: FC<SimpleModalProps> = (
	{
		title,
		open,
		onClose,
		actionButtons,
		children,
	},
) => {
	return (
		<Dialog
			open={open}
			onClose={onClose}
		>
			<DialogTitle sx={{
				pr: 8,
				minHeight: '64px',
			}}>
				{title}
				<IconButton
					aria-label="close"
					onClick={onClose}
					sx={{
						position: 'absolute',
						right: 12,
						top: 12,
					}}
				>
					<Close />
				</IconButton>
			</DialogTitle>
			<DialogContent
				sx={{
					overflowY: 'visible',
				}}
			>
				<Box sx={{
					width: {
						xs: '400px',
						md: '480px',
					},
					maxWidth: '100%',
				}}>
					{children}
				</Box>
			</DialogContent>
			{actionButtons && (
				<DialogActions sx={{
					pl: 3,
					pr: 3,
				}}>
					{actionButtons}
				</DialogActions>
			)}
		</Dialog>
	);
};