import { ListName } from '../../const/listName';
import DashboardCustomizeRoundedIcon from '@mui/icons-material/DashboardCustomizeRounded';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import GroupWorkRoundedIcon from '@mui/icons-material/GroupWorkRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import TextFieldsRoundedIcon from '@mui/icons-material/TextFieldsRounded';
import InsertLinkRoundedIcon from '@mui/icons-material/InsertLinkRounded';
import DocumentScannerRoundedIcon from '@mui/icons-material/DocumentScannerRounded';
import GamepadRoundedIcon from '@mui/icons-material/GamepadRounded';
import VerticalSplitRoundedIcon from '@mui/icons-material/VerticalSplitRounded';
import AssignmentIndRoundedIcon from '@mui/icons-material/AssignmentIndRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import AutoAwesomeMotionRoundedIcon from '@mui/icons-material/AutoAwesomeMotionRounded';

export const menuIcons = {
	'Dashboard': <DashboardCustomizeRoundedIcon />,
	[ListName.Projects]: <AccountTreeRoundedIcon />,
	[ListName.Teams]: <GroupWorkRoundedIcon />,
	[ListName.Users]: <GroupRoundedIcon />,
	[ListName.Fields]: <TextFieldsRoundedIcon />,
	[ListName.DeepLinks]: <InsertLinkRoundedIcon />,
	[ListName.Documents]: <DocumentScannerRoundedIcon />,
	[ListName.Roles]: <GamepadRoundedIcon />,
	[ListName.FieldGroups]: <VerticalSplitRoundedIcon />,
	[ListName.Surveys]: <AssignmentIndRoundedIcon />,
	[ListName.Forms]: <AssignmentRoundedIcon />,
	[ListName.FormTemplates]: <AutoAwesomeMotionRoundedIcon />,
};