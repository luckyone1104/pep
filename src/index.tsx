import { isMobile } from './const';
import {
	renderMobileApp,
	renderDesktopApp,
} from './utils';

isMobile ? renderMobileApp() : renderDesktopApp();