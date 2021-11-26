import React, { FC } from 'react';
import { PROJECTS_LIST_URL, SORT_FIELDS_PAIRS } from './const';
import { ProjectListSidebar } from './components/ProjectListSidebar';
import { ProjectsListTable } from './components/ProjectsListTable';
import { ListProviders } from '../../../components/List/providers';

export const ProjectsList: FC = () => {
	return (
		<ListProviders
			url={PROJECTS_LIST_URL}
			sortFieldsPairs={SORT_FIELDS_PAIRS}
		>
			<ProjectsListTable />
			<ProjectListSidebar />
		</ListProviders>
	);
};
