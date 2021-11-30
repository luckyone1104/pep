import { lazy } from 'react';
import { ModuleName } from './ModuleName';

export const detailPages = [
	{
		name: ModuleName.Projects,
		path: '/projects/detail/:id',
		component: lazy(() => import('src/modules/projects/detail')),
	},
	// {
	// 	name: ModuleName.Teams,
	// 	path: '/teams/detail/:id',
	// 	component: lazy(() => import('src/modules/teams/detail')),
	// },
	// {
	// 	name: ModuleName.Users,
	// 	path: '/users/detail/:id',
	// 	component: lazy(() => import('src/modules/users/detail')),
	// },
	// {
	// 	name: ModuleName.Fields,
	// 	path: '/fields/detail/:id',
	// 	component: lazy(() => import('src/modules/fields/detail')),
	// },
	// {
	// 	name: ModuleName.DeepLinks,
	// 	path: '/deeplinks/detail/:id',
	// 	component: lazy(() => import('src/modules/deeplinks/detail')),
	// },
	// {
	// 	name: ModuleName.Documents,
	// 	path: '/documents/detail/:id',
	// 	component: lazy(() => import('src/modules/documents/detail')),
	// },
	// {
	// 	name: ModuleName.Roles,
	// 	path: '/roles/detail/:id',
	// 	component: lazy(() => import('src/modules/roles/detail')),
	// },
	// {
	// 	name: ModuleName.FieldGroups,
	// 	path: '/fieldgroups/detail/:id',
	// 	component: lazy(() => import('src/modules/fieldgroups/detail')),
	// },
	// {
	// 	name: ModuleName.Surveys,
	// 	path: '/surveys/detail/:id',
	// 	component: lazy(() => import('src/modules/surveys/detail')),
	// },
	// {
	// 	name: ModuleName.Forms,
	// 	path: '/forms/detail/:id',
	// 	component: lazy(() => import('src/modules/forms/detail')),
	// },
	// {
	// 	name: ModuleName.FormTemplates,
	// 	path: '/formtemplates/detail/:id',
	// 	component: lazy(() => import('src/modules/formtemplates/detail')),
	// },
];
