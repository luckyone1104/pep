import ReactDOM from 'react-dom';

export const renderMobileApp = async () => {
	const { App } = await import('@mobile');

	ReactDOM.render(
		<App />,
		document.getElementById('root')
	);
};

export const renderDesktopApp = async () => {
	const { App } = await import('@desktop');
    
	ReactDOM.render(
		<App />,
		document.getElementById('root')
	);
};