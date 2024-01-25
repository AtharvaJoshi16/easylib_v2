import { InputHTMLAttributes } from 'react';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
	checked?: boolean;
	variant?:
		| 'primary'
		| 'secondary'
		| 'success'
		| 'tertiary'
		| 'success'
		| 'yellow'
		| 'error'
		| 'grey'
		| 'light'
		| 'dark';
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
