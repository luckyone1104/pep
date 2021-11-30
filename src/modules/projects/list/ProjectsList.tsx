import React, { FC } from 'react';
import { PROJECTS_LIST_URL, SORT_FIELDS_PAIRS } from './const';
import { ProjectListSidebar } from './components/ProjectListSidebar';
import { ProjectsListTable } from './components/ProjectsListTable';
import { ListProviders } from '../../../components/List/providers';
import { ProjectListHeader } from './components/ProjectListHeader';
import { ListLayout } from '../../../components/List';
import { ProjectListAddProjectModalProvider } from './providers/ProjectListAddProjectModalProvider';

export const ProjectsList: FC = () => {
	return (
		<ListProviders
			url={PROJECTS_LIST_URL}
			sortFieldsPairs={SORT_FIELDS_PAIRS}
		>
			<ListLayout>
				<ProjectListAddProjectModalProvider>
					<ProjectListHeader/>
					<ProjectsListTable/>
				</ProjectListAddProjectModalProvider>
			</ListLayout>
			<ProjectListSidebar/>
		</ListProviders>
	);
};
