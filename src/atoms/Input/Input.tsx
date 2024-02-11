import classNames from 'classnames';
import { InputProps } from './Input.model';
import React, { useEffect, useState } from 'react';
import { Sizes } from '../../enums/common-enums';
import './Input.scss';
import { useDebounce } from 'usehooks-ts';

const Input = ({
	placeholder,
	ariaLabel,
	id,
	key,
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
	onChange,
	...props
}: InputProps) => {
	const [inputValue, setValue] = useState<string>(value ?? '');
	const [inputEvent, setEvent] =
		useState<React.ChangeEvent<HTMLInputElement>>();
	const debouncedValue = useDebounce<string>(
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
				placeholder={placeholder}
				required={required}
				aria-label={ariaLabel}
				onChange={(e) => handleChange(e)}
				{...props}
			/>
		</div>
	);
};
export default Input;
