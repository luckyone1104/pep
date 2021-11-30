import React, { FC, useLayoutEffect, useRef, useState } from 'react';
import { useIsMountedRef } from '../../hooks/useIsMountedRef';
import { isNull } from '../../utils';
import { debounce } from '../../utils/debounce';
import { Box } from '@mui/material';
import { balancer } from './utils';

const MIN_COLUMN_WIDTH = 320;

type ColumnBalancerProps = {
	maxColumns?: number;
}

type ReactChildArray = ReturnType<typeof React.Children.toArray>;

export const ColumnBalancer: FC<ColumnBalancerProps> = (
	{
		maxColumns = 3,
		children
	}
) => {
	const { isMountedRef } = useIsMountedRef();
	const columnsBalancerRef = useRef<HTMLDivElement>(null);
	const [columnsCount, setColumnsCount] = useState(maxColumns);

	useLayoutEffect(() => {
		const resizeObserver = new ResizeObserver(debounce<ResizeObserverCallback>((entries) => {
			entries.forEach((entry) => {
				const maxColumnsCount = Math.floor(entry.contentRect.width / MIN_COLUMN_WIDTH);
				const newColumnsCount = (
					(maxColumnsCount >= maxColumns)
						? maxColumns
						: maxColumnsCount
				) || 1;

				if (isMountedRef.current) {
					setColumnsCount(newColumnsCount);
				}
			});
		}));

		if (!isNull(columnsBalancerRef.current)) {
			resizeObserver.observe(columnsBalancerRef.current);
		}

		return () => {
			resizeObserver.disconnect();
		};
	}, [maxColumns, isMountedRef]);

	const childrenIsArray = children instanceof Array;

	return (
		<Box
			ref={columnsBalancerRef}
			sx={{
				display: 'grid',
				gridGap: '24px',
				gridTemplateColumns: `repeat(${columnsCount}, 1fr)`
			}}
		>
			{childrenIsArray && balancer((children as ReactChildArray).filter(child => child), columnsCount)
				.map((column, idx) => (
					<Box
						sx={{
							minWidth: '1px',
							display: 'flex',
							flexDirection: 'column',
							gap: 2
						}}
						key={idx}
					>
						{column.map((item, key) => (
							<Box key={key}>
								{item}
							</Box>
						))}
					</Box>
				))
			}
			{!childrenIsArray && (
				<div style={{ minWidth: '1px' }}>
					{children}
				</div>
			)}
		</Box>
	);
};
