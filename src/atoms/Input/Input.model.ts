import { InputHTMLAttributes } from 'react';
import { Sizes } from '../../enums/common-enums';
import { Colors } from '../../types/colorTypes';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	placeholder?: string;
	variant?: 'outlined' | 'contained' | 'standard';
	variantColor?: InputColors;
	value?: string;
	id: string;
	key: string;
	labelKey: string;
	label?: boolean;
	labelText?: string;
	boldLabel?: boolean;
	labelStyle?: 'standard' | 'swipeup' | 'onborder';
	inputSize?: Sizes;
	warning?: boolean;
	debounce?: boolean;
	debounceTime?: number;
	helperText?: string;
	warningText?: string;
	full?: boolean;
	ariaLabel: string;
	required?: boolean;
	className?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type InputColors = Omit<Colors, 'light'>;
