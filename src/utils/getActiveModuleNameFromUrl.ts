export const getActiveModuleNameFromUrl = () => {
	return window.location.pathname.split('/')[1].toLowerCase();
};
