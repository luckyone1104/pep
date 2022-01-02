import { isEmpty } from '../checkers';

export const required = () => (value: unknown) => {
	if (isEmpty(value)) {
		return 'Required';
	}
};
