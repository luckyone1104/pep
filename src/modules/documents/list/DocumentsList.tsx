import { FC } from 'react';
import { ListProviders } from '../../../components/List/providers';
import { DOCUMENTS_URL } from '../common/const';
import { SORT_FIELD_PAIRS } from './const';
import { AddDocumentModalProvider } from './providers/AddDocumentModalProvider';
import { ListLayout } from '../../../components/List';
import { DocumentsListHeader } from './components/DocumentsListHeader';
import { FilterBreadCrumbs } from '../../../components/FilterBreadCrumbs';
import { DocumentsListTable } from './components/DocumentsListTable';
import { DocumentsListSidebar } from './components/DocumentsListSidebar';

export const DocumentsList: FC = () => {
	return (
		<ListProviders url={DOCUMENTS_URL} sortFieldsPairs={SORT_FIELD_PAIRS}>
			<AddDocumentModalProvider>
				<ListLayout>
					<DocumentsListHeader />
					<FilterBreadCrumbs />
					<DocumentsListTable />
				</ListLayout>
			</AddDocumentModalProvider>
			<DocumentsListSidebar />
		</ListProviders>
	);
};
