import {
	detectMobile,
	renderMobileApp,
	renderDesktopApp,
} from './utils';

const isMobile = detectMobile();
isMobile ? renderMobileApp() : renderDesktopApp();