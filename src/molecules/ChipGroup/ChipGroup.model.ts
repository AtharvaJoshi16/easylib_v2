import { ChipProps } from '../../atoms/Chip/Chip.model';
import { Colors } from '../../types/colorTypes';

export interface ChipGroup {
	children?: React.ReactElement<ChipGroup>[];
	chipList: ChipProps[];
	multiSelect?: boolean;
	clickable?: boolean;
	getSelected?: (chips?: ChipProps[]) => void;
	onChipClick?: (chipKey: string) => void;
	deleteIcon?: JSX.Element;
	chipVariant?: 'contained' | 'outlined';
	color?: Colors;
	size?: 'small' | 'medium' | 'large' | 'x-large' | 'xx-large';
}
