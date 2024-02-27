import { InputHTMLAttributes } from 'react';
import { Sizes } from '../../enums/common-enums';
import { Colors } from '../../types/colorTypes';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	variant?: 'outlined' | 'contained' | 'standard';
	variantColor?: InputColors;
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
	className?: string;
}

export type InputColors = Omit<Colors, 'light'>;
