import { FC, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { listPages } from '../const';
import { CircularLoader } from '../components/CircularLoader';

export const AppRoutes: FC = () => {
	return (
		<Suspense fallback={<CircularLoader />}>
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