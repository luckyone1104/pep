import { isUndefined } from '../../../utils';

export const checkIfMenuItemSelected = (pathname: string, name: string) => {
	const moduleFromUrl = pathname.split('/')[1]?.toLowerCase();

	if (isUndefined(moduleFromUrl)) {
		return false;
	}

	const joinedAndLoweredModuleName = name.split(' ').join('').toLowerCase();

	return moduleFromUrl === joinedAndLoweredModuleName;
};
