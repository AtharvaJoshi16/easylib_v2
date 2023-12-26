import { InputHTMLAttributes } from 'react';

export interface RadioGroupProps extends InputHTMLAttributes<HTMLInputElement> {
	warningText?: string;
	options: Option[];
	initialSelected?: string;
	onOptionChange?: (selected: Option) => void;
	alignment?: 'vertical' | 'horizontal';
	className?: string;
	iconWithLabel?: boolean;
	icon?: React.ReactNode;
}

export interface Option {
	value: string;
	helperText?: string;
	id: string;
	disabled?: boolean;
}