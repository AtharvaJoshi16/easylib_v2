import classNames from 'classnames';
import { InputProps } from './Input.model';
import React, { useEffect, useState } from 'react';
import { Sizes } from '../../enums/common-enums';
import './Input.scss';
import { useDebounce } from 'usehooks-ts';

const Input = ({
	placeholder,
	id,
	labelKey,
	value,
	variant = 'outlined',
	label = false,
	labelStyle = 'standard',
	labelText,
	boldLabel = false,
	variantColor,
	debounce = false,
	debounceTime = 500,
	inputSize = Sizes.medium,
	required = false,
	helperText,
	warning = false,
	warningText,
	full = false,
	className,
	onMouseDown,
	onChange,
	onFocus,
	onBlur,
	...props
}: InputProps) => {
	const [inputValue, setValue] = useState<string | number | readonly string[]>(
		value ?? ''
	);
	const [inputEvent, setEvent] =
		useState<React.ChangeEvent<HTMLInputElement>>();
	const [mouseClick, setClick] = useState(false);

	const debouncedValue = useDebounce<string | number | readonly string[]>(
		inputValue,
		debounce ? debounceTime : 0
	);

	useEffect(() => {
		inputEvent && onChange?.(inputEvent);
	}, [debouncedValue]);

	const classes = classNames(
		className,
		'input-field',
		`input-field--${inputSize}`,
		{ 'input-field--full': full },
		`input-field--${variant}`,
		{ [`input-field--${variant}--${variantColor}`]: variantColor }
	);

	const labelClasses = classNames(
		'input-field__label',
		`input-field__label--${inputSize}`,
		`input-field__label--${labelStyle}`,
		{ 'input-field__label--bold': boldLabel }
	);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
		setEvent(e);
	};

	const handleMouseDown = (e: React.MouseEvent<HTMLInputElement>) => {
		(e.target as Element).classList.remove('input-field--focus');
		setClick(true);
		onMouseDown?.(e);
	};

	const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
		if (!mouseClick) {
			(e.target as Element).classList.add('input-field--focus');
		}
		onFocus?.(e);
	};

	const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
		setClick(false);
		e.target.classList.remove('input-field--focus');
		onBlur?.(e);
	};
	return (
		<div className="input-field-wrapper">
			{label && (
				<label className={labelClasses} htmlFor={id} id={id} key={labelKey}>
					{labelText}
					{required && <span className="input-field__label__asterisk">*</span>}
				</label>
			)}
			<input
				value={inputValue}
				className={classes}
				onChange={(e) => handleChange(e)}
				onMouseDown={(e) => handleMouseDown(e)}
				onBlur={(e) => handleBlur(e)}
				onFocus={(e) => handleFocus(e)}
				{...props}
			/>
		</div>
	);
};
export default Input;
