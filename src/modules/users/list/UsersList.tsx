import { FC } from 'react';
import { ListProviders } from '../../../components/List/providers';
import { USERS_URL } from '../common/const';
import { SORT_FIELD_PAIRS } from './const';
import { AddUserModalProvider } from './providers/AddUserModalProvider';
import { ListLayout } from '../../../components/List';
import { UsersListHeader } from './components/UsersListHeader';
import { FilterBreadCrumbs } from '../../../components/FilterBreadCrumbs';
import { UsersListTable } from './components/UsersListTable';

export const UsersList: FC = () => {
	return (
		<ListProviders
			url={USERS_URL}
			sortFieldsPairs={SORT_FIELD_PAIRS}
		>
			<AddUserModalProvider>
				<ListLayout>
					<UsersListHeader />
					<FilterBreadCrumbs />
					<UsersListTable />
				</ListLayout>
			</AddUserModalProvider>
		</ListProviders>
	);
};
