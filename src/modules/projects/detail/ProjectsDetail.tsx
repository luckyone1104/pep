import React, { FC } from 'react';
import { DetailLayout, DetailProviders } from '../../../components/Detail';
import { ProjectsDetailHeader } from './components/ProjectsDetailHeader';
import { ProjectsDetailForm } from './components/ProjectsDetailForm';
import { PROJECTS_URL } from '../common/const';

export const ProjectsDetail: FC = () => {
	return (
		<DetailProviders url={PROJECTS_URL}>
			<DetailLayout>
				<ProjectsDetailHeader />
				<ProjectsDetailForm />
			</DetailLayout>
		</DetailProviders>
	);
};
