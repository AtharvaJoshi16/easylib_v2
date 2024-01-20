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
	labelFirst = false,
	warningText,
	boldHeading = false,
	full = false,
	...props
}: RadioGroupProps) => {
	const classes = classNames(
		className,
		'radio-group',
		`radio-group--${alignment}`,
		{ 'radio-group--full': full }
	);

	const warningTextClasses = classNames('radio-group__warning-text', {
		'radio-group__warning-text--fit': !full,
	});

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
		<>
			<div className={classes}>
				{options?.map((option, index) => {
					const radioInputClasses = classNames('radio-group__input', {
						'radio-group__input--warning': option?.warning,
					});

					const helperTextClasses = classNames(
						'radio-group__item__texts__helper',
						{ 'radio-group__item__texts__helper--warning': option?.warning },
						{ 'radio-group__item__texts__helper--fit': !full }
					);

					const helperTextWithLabelClasses = classNames(
						'radio-group__item__with-label__texts__helper',
						{
							'radio-group__item__with-label__texts__helper--warning':
								option?.warning,
						},
						{ 'radio-group__item__with-label__texts__helper--fit': !full }
					);

					const optionHeadingClasses = classNames(
						'radio-group__item__texts__main',
						{ 'radio-group__item__texts__main--warning': option?.warning },
						{ 'radio-group__item__texts__main--fit': !full }
					);
					return (
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
								<span className={radioInputClasses}></span>

								{iconWithLabel ? (
									<div className="radio-group__item__with-label">
										{labelFirst ? (
											<div className="radio-group__item__with-label__label-first">
												<div className="radio-group__item__with-label__texts">
													<Typography
														className={optionHeadingClasses}
														styling={boldHeading ? 'semibold' : 'regular'}
													>
														{option.value}
													</Typography>

													<Typography className={helperTextWithLabelClasses}>
														{option.helperText}
													</Typography>
												</div>
												{icon}
											</div>
										) : (
											<div className="radio-group__item__with-label__icon-first">
												{icon}
												<div className="radio-group__item__with-label__texts">
													<Typography
														className={optionHeadingClasses}
														styling={boldHeading ? 'semibold' : 'regular'}
													>
														{option.value}
													</Typography>

													<Typography className={helperTextWithLabelClasses}>
														{option.helperText}
													</Typography>
												</div>
											</div>
										)}
									</div>
								) : (
									<div className="radio-group__item__texts">
										{icon ? (
											icon
										) : (
											<>
												<Typography
													className={optionHeadingClasses}
													styling={boldHeading ? 'semibold' : 'regular'}
												>
													{option.value}
												</Typography>

												<Typography className={helperTextClasses}>
													{option.helperText}
												</Typography>
											</>
										)}
									</div>
								)}
							</label>
						</div>
					);
				})}
			</div>
			{warningText && (
				<Typography className={warningTextClasses}>{warningText}</Typography>
			)}
		</>
	);
};

export default RadioGroup;
