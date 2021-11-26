import { useContext } from 'react';
import { NotificationsContext } from '../const';
import { isNull } from '../../../utils';
import { NotificationsContextType } from '../types';

export const useNotificationsContext = () => {
	const context = useContext(NotificationsContext);

	if (isNull(context)) {
		throw new Error('Please, provide NotificationsContext');
	}

	return context as NotificationsContextType;
};
