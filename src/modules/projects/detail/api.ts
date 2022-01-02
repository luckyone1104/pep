import { put } from '../../../api';
import { ProjectsDetailData } from './types';
import { PROJECTS_URL } from '../common/const';

type UpdateProjectDataProps = {
	id: string;
	data: ProjectsDetailData;
};

export const updateProjectData = async ({ id, data }: UpdateProjectDataProps) =>
	put(`${PROJECTS_URL}/${id}`, data);
