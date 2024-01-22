import { Colors } from '../../types/colorTypes';
import { TypographyProps } from '../Typography/Typography.model';

export interface ChipProps extends TypographyProps {
	label: string;
	onDelete?: (chipKey: string) => void;
	onChipAction?: (chip: ChipProps) => void;
	DeleteIcon?: JSX.Element;
	chipVariant?: 'outlined' | 'contained';
	color?: Colors;
	clickable?: boolean;
	onClick?: (chipKey: string) => void;
	defaultSelected?: boolean;
	size?: 'small' | 'medium' | 'large' | 'x-large' | 'xx-large';
	className?: string;
	chipKey: string;
	disabled?: boolean;
}
