import React, { FC } from 'react';
import { SkeletonListHeader } from './components/SkeletonListHeader';
import { SkeletonListBreadCrumbs } from './components/SkeletonListBreadCrumbs';
import { SkeletonListTable } from './components/SkeletonListTable';
import { ListLayout } from '../List';

export const SkeletonList: FC = () => {
	return (
		<ListLayout>
			<SkeletonListHeader />
			<SkeletonListBreadCrumbs />
			<SkeletonListTable />
		</ListLayout>
	);
};
