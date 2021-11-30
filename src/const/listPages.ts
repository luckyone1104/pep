import { lazy } from 'react';
import { ModuleName } from './ModuleName';

export const listPages = [
	{
		name: ModuleName.Projects,
		path: '/projects/list',
		component: lazy(() => import('src/modules/projects/list')),
	},
	{
		name: ModuleName.Teams,
		path: '/teams/list',
		component: lazy(() => import('src/modules/teams/list')),
	},
	{
		name: ModuleName.Users,
		path: '/users/list',
		component: lazy(() => import('src/modules/users/list')),
	},
	{
		name: ModuleName.Fields,
		path: '/fields/list',
		component: lazy(() => import('src/modules/fields/list')),
	},
	{
		name: ModuleName.DeepLinks,
		path: '/deeplinks/list',
		component: lazy(() => import('src/modules/deeplinks/list')),
	},
	{
		name: ModuleName.Documents,
		path: '/documents/list',
		component: lazy(() => import('src/modules/documents/list')),
	},
	{
		name: ModuleName.Roles,
		path: '/roles/list',
		component: lazy(() => import('src/modules/roles/list')),
	},
	{
		name: ModuleName.FieldGroups,
		path: '/fieldgroups/list',
		component: lazy(() => import('src/modules/fieldgroups/list')),
	},
	{
		name: ModuleName.Surveys,
		path: '/surveys/list',
		component: lazy(() => import('src/modules/surveys/list')),
	},
	{
		name: ModuleName.Forms,
		path: '/forms/list',
		component: lazy(() => import('src/modules/forms/list')),
	},
	{
		name: ModuleName.FormTemplates,
		path: '/formtemplates/list',
		component: lazy(() => import('src/modules/formtemplates/list')),
	},
];
