import { InputHTMLAttributes } from 'react';
import { Sizes } from '../../enums/common-enums';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	placeholder?: string;
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
