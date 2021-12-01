import { SxProps } from '@mui/system';
import { Theme } from '@mui/material';

export const style: SxProps<Theme> = {
	position: 'absolute' as const,
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	bgcolor: 'background.paper',
	boxShadow: 24,
	p: '24px 32px',
	borderRadius: '4px',
	display: 'flex',
	flexDirection: 'column',
	gap: 2,
	width: 480,
	maxWidth: 'calc(100% - 32px)'
};
