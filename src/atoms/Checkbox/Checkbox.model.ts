import { InputHTMLAttributes } from 'react';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
	multiSelect?: boolean;
	checked?: boolean;
	id: string;
	label: string;
	disabled?: boolean;
	onCheck?: () => void;
	className?: string;
	icon?: boolean;
	iconOnly?: boolean;
	helperText?: string;
	warningText?: string;
	boldHeading?: boolean;
}
