import { ChipProps } from '../../atoms/Chip/Chip.model';
import { Colors } from '../../types/colorTypes';

export interface ChipGroup {
	children?: React.ReactElement<ChipGroup>[];
	chips: ChipProps[];
	multiSelect?: boolean;
	getSelected?: (chips?: string[] | string) => void;
	getAll?: (chips: string[]) => void;
	deleteIcon?: React.ElementType;
	chipVariant?: 'contained' | 'outlined';
	color?: Colors;
	size?: 'small' | 'medium' | 'large' | 'x-large' | 'xx-large';
}
