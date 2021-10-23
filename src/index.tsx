import {
	detectMobile,
	renderMobileApp,
	renderDesktopApp,
} from './utils';
import { greet } from '@shared';

const isMobile = detectMobile();
greet();
isMobile ? renderMobileApp() : renderDesktopApp();