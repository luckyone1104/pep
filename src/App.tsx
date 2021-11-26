import { FC } from 'react';
import { AppProviders } from './providers';
import { AppLayout } from './components/AppLayout';
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
