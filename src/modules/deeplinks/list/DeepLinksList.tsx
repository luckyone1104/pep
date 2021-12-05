import { FC } from 'react';
import { ListProviders } from '../../../components/List/providers';
import { DEEPLINKS_URL } from '../common/const';
import { SORT_FIELD_PAIRS } from './const';
import { AddDeeplinkModalProvider } from './providers/AddDeeplinkModalProvider';
import { ListLayout } from '../../../components/List';
import { DeeplinksListHeader } from './components/DeeplinksListHeader';
import { FilterBreadCrumbs } from '../../../components/FilterBreadCrumbs';
import { DeeplinksListTable } from './components/DeeplinksListTable';
import { DeeplinksListSidebar } from './components/DeeplinksListSidebar';

export const DeepLinksList: FC = () => {

	return (
		<ListProviders
			url={DEEPLINKS_URL}
			sortFieldsPairs={SORT_FIELD_PAIRS}
		>
			<AddDeeplinkModalProvider>
				<ListLayout>
					<DeeplinksListHeader />
					<FilterBreadCrumbs />
					<DeeplinksListTable />
				</ListLayout>
			</AddDeeplinkModalProvider>
			<DeeplinksListSidebar />
		</ListProviders>
	);
};
