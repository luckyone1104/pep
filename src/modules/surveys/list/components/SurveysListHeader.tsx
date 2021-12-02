import React, { FC } from 'react';
import { ListHeader } from '../../../../components/ListHeader';
import { ModuleName } from '../../../../const';
import { Button } from '@mui/material';
import { useAddSurveyModalContext } from '../hooks/useAddSurveyModalContext';

export const SurveysListHeader: FC = () => {
	const { handleOpen } = useAddSurveyModalContext();

	return (
		<ListHeader
			listTitle={ModuleName.Surveys}
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
