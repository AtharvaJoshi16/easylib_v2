import { InputHTMLAttributes } from 'react';
import { CheckboxVariants } from '../../types/colorTypes';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
	checked?: boolean;
	variant?: CheckboxVariants;
	id: string;
	label: string;
	disabled?: boolean;
	onCheck?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	className?: string;
	icon?: JSX.Element;
	full?: boolean;
	iconOnly?: boolean;
	labelFirst?: boolean;
	helperText?: string;
	warning?: boolean;
	boldHeading?: boolean;
}
