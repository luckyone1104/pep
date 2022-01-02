import React, { FC } from 'react';
import { ColumnBalancer } from '../ColumnBalancer';
import { Skeleton, TextField } from '@mui/material';

type SkeletonFieldsProps = {
	fieldsCount?: number;
	maxColumns?: number;
};

export const SkeletonFields: FC<SkeletonFieldsProps> = ({
	fieldsCount,
	maxColumns,
}) => {
	return (
		<ColumnBalancer maxColumns={maxColumns}>
			{Array(fieldsCount)
				.fill(null)
				.map((i, key) => (
					<Skeleton key={key} sx={{ maxWidth: '100%' }}>
						<TextField />
					</Skeleton>
				))}
		</ColumnBalancer>
	);
};
