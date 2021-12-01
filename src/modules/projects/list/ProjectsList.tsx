import React, { FC } from 'react';
import { SORT_FIELDS_PAIRS } from './const';
import { ProjectsListSidebar } from './components/ProjectsListSidebar';
import { ProjectsListTable } from './components/ProjectsListTable';
import { ListProviders } from '../../../components/List/providers';
import { PROJECTS_URL } from '../common/const';
import { ProjectsListHeader } from './components/ProjectsListHeader';
import { ListLayout } from '../../../components/List';
import { ProjectListAddProjectModalProvider } from './providers/ProjectListAddProjectModalProvider';
import { FilterBreadCrumbs } from '../../../components/FilterBreadCrumbs';

export const ProjectsList: FC = () => {
	return (
		<ListProviders
			url={PROJECTS_URL}
			sortFieldsPairs={SORT_FIELDS_PAIRS}
		>
			<ListLayout>
				<ProjectListAddProjectModalProvider>
					<ProjectsListHeader />
					<FilterBreadCrumbs />
					<ProjectsListTable />
				</ProjectListAddProjectModalProvider>
			</ListLayout>
			<ProjectsListSidebar />
		</ListProviders>
	);
};
