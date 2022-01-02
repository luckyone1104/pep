import { AlertColor } from '@mui/material';

export type NotificationsContextType = {
	notify: (message: string, variant?: AlertColor) => void;
};
