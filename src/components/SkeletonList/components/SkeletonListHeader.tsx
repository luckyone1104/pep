import React, { FC } from 'react';
import { ListHeader } from '../../ListHeader';
import { Button, Skeleton } from '@mui/material';

export const SkeletonListHeader: FC = () => {
	return (
		<ListHeader
			listTitle={<Skeleton sx={{ minWidth: 140 }} />}
			rightSide={
				<Skeleton>
					<Button sx={{ minWidth: 140 }} />
				</Skeleton>
			}
		/>
	);
};
