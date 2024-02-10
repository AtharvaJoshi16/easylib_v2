import { InputHTMLAttributes } from 'react';
import { Sizes } from '../../enums/common-enums';
import { Colors } from '../../types/colorTypes';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	placeholder?: string;
	variant?: 'outlined' | 'contained' | 'standard';
	color?: Colors;
	value?: string;
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
