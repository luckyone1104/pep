import React, { FC } from 'react';
import { Box, Modal } from '@mui/material';
import { style } from './style';
import Fade from '@mui/material/Fade';
import { SimpleModalTitle } from './components/SimpleModalTitle';

export type SimpleModalProps = {
	title?: string;
	open: boolean;
	onClose: () => void;
	keepMounted?: boolean;
};

export const SimpleModal: FC<SimpleModalProps> = ({
	title,
	open,
	onClose,
	keepMounted = true /*needs to be mounted by default to prevent mui fields from dancing*/,
	children,
}) => {
	return (
		<Modal
			open={open}
			onClose={onClose}
			closeAfterTransition
			keepMounted={keepMounted}
		>
			<Fade in={open}>
				<Box sx={style}>
					{title && (
						<SimpleModalTitle title={title} onClose={onClose} />
					)}
					{children}
				</Box>
			</Fade>
		</Modal>
	);
};
