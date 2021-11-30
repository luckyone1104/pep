import { FC, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { detailPages, listPages } from '../const';
import { CircularLoader } from '../components/CircularLoader';

export const AppRoutes: FC = () => {
	return (
		<Suspense fallback={<CircularLoader />}>
			<Switch>
				<Route
					exact
					path="/"
					component={lazy(() => import('src/modules/dashboard'))}
				/>
				{listPages.map(({ path, component }) => (
					<Route
						exact
						key={path}
						path={path}
						component={component}
					/>
				))}
				{detailPages.map(({ path, component }) => (
					<Route
						exact
						key={path}
						path={path}
						component={component}
					/>
				))}
				<Route
					path="*"
					component={lazy(() => import('src/modules/error/notFound'))}
				/>
			</Switch>
		</Suspense>
	);
};
