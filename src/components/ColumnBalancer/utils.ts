import React from 'react';

type ReactChildArray = ReturnType<typeof React.Children.toArray>;

const flattenChildren = (children: React.ReactNode): ReactChildArray => {
	const childrenArray = React.Children.toArray(children);
	return childrenArray.reduce((flatChildren: ReactChildArray, child) => {
		if ((child as React.ReactElement<unknown>).type === React.Fragment) {
			return flatChildren.concat(
				flattenChildren((child as React.ReactElement).props.children)
			);
		}

		return flatChildren.concat(child);
	}, []);
};

export const balancer = (items: React.ReactNode, maxColumns: number) => {
	const normalizedItems = flattenChildren(items);
	const itemsPerColumns = Math.floor(normalizedItems.length / maxColumns);
	let balanceSize = normalizedItems.length % maxColumns;

	return normalizedItems.reduce<React.ReactNode[][]>(
		(acc, item) => {
			const lastAccIndex = acc.length - 1;

			if (
				acc[lastAccIndex].length ===
				itemsPerColumns + (balanceSize && 1)
			) {
				if (balanceSize > 0) {
					balanceSize -= 1;
				}

				acc.push([item]);
			} else {
				acc[lastAccIndex].push(item);
			}

			return acc;
		},
		[[]]
	);
};
