import classNames from 'classnames';
import { InputProps } from './Input.model';
import React, { useEffect, useState } from 'react';
import { Sizes } from '../../enums/common-enums';
import './Input.scss';
import { useDebounce } from 'usehooks-ts';

const Input = ({
	placeholder,
	ariaLabel,
	value,
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
		{ 'input-field--full': full }
	);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
		setEvent(e);
	};
	return (
		<input
			value={inputValue}
			className={classes}
			placeholder={placeholder}
			required={required}
			aria-label={ariaLabel}
			onChange={(e) => handleChange(e)}
			{...props}
		/>
	);
};
export default Input;
