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
	icon,
	iconWithLabel = false,
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
					<label
						className="radio-group__item__label"
						key={`${option.id}-${index}`}
						htmlFor={option.id}
					>
						<input
							type="radio"
							key={`${option.value}-${index}`}
							id={option.id}
							value={option.value}
							disabled={option.disabled}
							onChange={(e) => onChange(e, option)}
							checked={selected === option.value}
							{...props}
						/>
						<span className="radio-group__input"></span>

						{iconWithLabel ? (
							<div className="radio-grop__item__with-label">
								{icon}
								<div className="radio-group__item__with-label__texts">
									<Typography styling="bold">{option.value}</Typography>

									<Typography className="radio-group__item__with-label__texts__helper">
										{option.helperText}
									</Typography>
								</div>
							</div>
						) : (
							<div className="radio-group__item__texts">
								{icon ? (
									icon
								) : (
									<>
										<Typography styling="bold">{option.value}</Typography>

										<Typography className="radio-group__item__texts__helper">
											{option.helperText}
										</Typography>
									</>
								)}
							</div>
						)}
					</label>
				</div>
			))}
		</div>
	);
};

export default RadioGroup;
