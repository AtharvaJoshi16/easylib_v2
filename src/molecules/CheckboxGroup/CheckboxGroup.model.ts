import { CheckboxProps } from '../../atoms/Checkbox/Checkbox.model';
import { CheckboxVariants } from '../../types/colorTypes';

export interface CheckboxGroupProps {
	options: CheckboxProps[];
	warningText?: string;
	variant?: CheckboxVariants;
	full?: boolean;
	alignment?: 'vertical' | 'horizontal';
	boldHeading?: boolean;
	onAction?: (selected: CheckboxProps[]) => void;
	className?: string;
}
