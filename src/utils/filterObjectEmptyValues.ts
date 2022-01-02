import { CustomObject } from '../types';
import { isEmpty } from './';

export const filterObjectEmptyValues = (object: CustomObject) => {
	return Object.entries(object).reduce((acc, [key, value]) => {
		return isEmpty(value) ? acc : { ...acc, [key]: value };
	}, {});
};
