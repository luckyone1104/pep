import { ModuleName } from '../../const';
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
	[ModuleName.Projects]: <AccountTreeRoundedIcon />,
	[ModuleName.Teams]: <GroupWorkRoundedIcon />,
	[ModuleName.Users]: <GroupRoundedIcon />,
	[ModuleName.Fields]: <TextFieldsRoundedIcon />,
	[ModuleName.DeepLinks]: <InsertLinkRoundedIcon />,
	[ModuleName.Documents]: <DocumentScannerRoundedIcon />,
	[ModuleName.Roles]: <GamepadRoundedIcon />,
	[ModuleName.FieldGroups]: <VerticalSplitRoundedIcon />,
	[ModuleName.Surveys]: <AssignmentIndRoundedIcon />,
	[ModuleName.Forms]: <AssignmentRoundedIcon />,
	[ModuleName.FormTemplates]: <AutoAwesomeMotionRoundedIcon />,
};
