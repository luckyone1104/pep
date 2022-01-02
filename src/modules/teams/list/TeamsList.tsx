import { FC } from 'react';
import { ListProviders } from '../../../components/List/providers';
import { TEAMS_URL } from '../common/const';
import { SORT_FIELD_PAIRS } from './const';
import { AddTeamModalProvider } from './providers/AddTeamModalProvider';
import { ListLayout } from '../../../components/List';
import { TeamsListHeader } from './components/TeamsListHeader';
import { FilterBreadCrumbs } from '../../../components/FilterBreadCrumbs';
import { TeamsListTable } from './components/TeamsListTable';
import { TeamsListSidebar } from './components/TeamsListSidebar';

export const TeamsList: FC = () => {
	return (
		<ListProviders url={TEAMS_URL} sortFieldsPairs={SORT_FIELD_PAIRS}>
			<AddTeamModalProvider>
				<ListLayout>
					<TeamsListHeader />
					<FilterBreadCrumbs />
					<TeamsListTable />
				</ListLayout>
			</AddTeamModalProvider>
			<TeamsListSidebar />
		</ListProviders>
	);
};
