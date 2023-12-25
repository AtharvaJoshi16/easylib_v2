import { Option, RadioGroupProps } from './RadioGroup.model';
import React, { useState } from 'react';
import './RadioGroup.scss';
import { Typography } from '../../atoms';
import classNames from 'classnames';
const RadioGroup = ({
	options,
	onOptionChange,
	alignment = 'horizontal',
	initialSelected,
	className,
	...props
}: RadioGroupProps) => {
	const classes = classNames(
		className,
		'radio-group',
		`radio-group--${alignment}`
	);
	const [selected, setSelected] = useState<string>(
		initialSelected ?? options[0]?.value
	);

	const onChange = (
		event: React.ChangeEvent<HTMLInputElement>,
		option: Option
	) => {
		setSelected(event.target.value);
		onOptionChange?.(option);
	};
	return (
		<div className={classes}>
			{options?.map((option, index) => (
				<div className="radio-group__item" key={`${option.value}-${index}`}>
					<input
						type="radio"
						id={option.id}
						value={option.value}
						disabled={option.disabled}
						onChange={(e) => onChange(e, option)}
						checked={selected === option.value}
						{...props}
					/>
					<span className="radio-group__input"></span>
					<div className="radio-group__item__texts">
						<label key={`${option.id}-${index}`} htmlFor={option.id}>
							<Typography styling="bold">{option.value}</Typography>
						</label>
						<Typography className="radio-group__item__texts__helper">
							{option.helperText}
						</Typography>
					</div>
				</div>
			))}
		</div>
	);
};

export default RadioGroup;
