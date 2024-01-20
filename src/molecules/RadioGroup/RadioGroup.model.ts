import { InputHTMLAttributes } from 'react';

export interface RadioGroupProps extends InputHTMLAttributes<HTMLInputElement> {
	warningText?: string;
	full?: boolean;
	options: Option[];
	initialSelected?: string;
	onOptionChange?: (selected: Option) => void;
	alignment?: 'vertical' | 'horizontal';
	className?: string;
	iconWithLabel?: boolean;
	icon?: React.ReactNode;
	labelFirst?: boolean;
}

export interface Option {
	value: string;
	helperText?: string;
	id: string;
	disabled?: boolean;
	warning?: boolean;
}
