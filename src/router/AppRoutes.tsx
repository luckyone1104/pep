import { FC, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { listPages } from '../const';

export const AppRoutes: FC = () => {
	return (
		<Suspense fallback={<h1>Loading...</h1> /*todo: change fallback*/}>
			<Switch>
				<Route
					exact
					path="/"
					component={lazy(() => import('src/pages/dashboard'))}
				/>
				{listPages.map(({ path, component }) => (
					<Route
						exact
						key={path}
						path={path}
						component={component}
					/>
				))}
				<Route
					path="*"
					component={lazy(() => import('src/pages/error/notFound'))}
				/>
			</Switch>
		</Suspense>
	);
};