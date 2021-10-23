import ReactDOM from 'react-dom';

export const renderMobileApp = async () => {
	const { App } = await import('../app/mobile/App');

	ReactDOM.render(
		<App />,
		document.getElementById('root')
	);
};

export const renderDesktopApp = async () => {
	const { App } = await import('../app/desktop/App');
    
	ReactDOM.render(
		<App />,
		document.getElementById('root')
	);
};