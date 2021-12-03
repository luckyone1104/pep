import { GridColumns } from '@mui/x-data-grid';
import { TeamsListDataField } from '../const';

export const useTeamsListColumns = (): GridColumns => {
	return [
		{
			field: TeamsListDataField.Title,
			headerName: 'Title',
			minWidth: 200,
			flex: 1,
		},
		{
			field: TeamsListDataField.ProjectTitle,
			headerName: 'Project',
			minWidth: 200,
			flex: 1,
		},
		{
			field: TeamsListDataField.Size,
			headerName: 'Size',
			minWidth: 200,
			flex: 1,
			valueFormatter: (({ value }) => {
				return `${value} member${value === 1 ? '' : 's'}`;
			})
		},
		{
			field: TeamsListDataField.TeamLead,
			headerName: 'Team Lead',
			minWidth: 200,
			flex: 1,
			hideSortIcons: true,
		},
	];
};
