import { getActiveModuleNameFromUrl } from '../../../utils/getActiveModuleNameFromUrl';

export const checkIfMenuItemSelected = (pathname: string, name: string) => {
	const moduleFromUrl = getActiveModuleNameFromUrl();
	const joinedAndLowerCaseModuleName = name.split(' ').join('').toLowerCase();

	return moduleFromUrl === joinedAndLowerCaseModuleName;
};

