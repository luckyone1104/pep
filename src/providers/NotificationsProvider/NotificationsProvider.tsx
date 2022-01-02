import React, { FC } from 'react';
import { NotificationsContext } from './const';
import { useSnackbar } from 'notistack';
import { Alert, AlertColor } from '@mui/material';

export const NotificationsProvider: FC = ({ children }) => {
	const { enqueueSnackbar, closeSnackbar } = useSnackbar();
	const notify = (message: string, variant: AlertColor = 'info') => {
		enqueueSnackbar(message, {
			variant,
			anchorOrigin: {
				vertical: 'bottom',
				horizontal: 'right',
			},
			content: (key, message) => (
				<Alert
					key={key}
					severity={variant}
					onClose={() => closeSnackbar(key)}
				>
					{message}
				</Alert>
			),
		});
	};

	return (
		<NotificationsContext.Provider value={{ notify }}>
			{children}
		</NotificationsContext.Provider>
	);
};
