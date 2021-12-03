import { FC } from 'react';
import { useAddDeeplinkModalContext } from '../hooks/useAddDeeplinkModalContext';
import { ListHeader } from '../../../../components/ListHeader';
import { ModuleName } from '../../../../const';
import { Button } from '@mui/material';

export const DeeplinksListHeader: FC = () => {
	const { handleOpen } = useAddDeeplinkModalContext();

	return (
		<ListHeader
			listTitle={ModuleName.DeepLinks}
			rightSide={
				<Button
					variant="outlined"
					onClick={handleOpen}
				>
					Add
				</Button>
			}
		/>
	);
};
