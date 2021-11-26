import moment from 'moment';
import { DEFAULT_DATE_FORMAT } from '../const/date';

export const formatDate = (
	date: string,
	format?: string
) => {
	return moment(date).format(format || DEFAULT_DATE_FORMAT);
};
