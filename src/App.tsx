import { FC } from 'react';
import { AppProviders } from './providers';
import { AppLayout } from './components/Layout';
import { AppRoutes } from './router';

export const App: FC = () => {

	return (
		<AppProviders>
			<AppLayout>
				<AppRoutes />
			</AppLayout>
		</AppProviders>
	);
};