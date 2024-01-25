import React, { useEffect, useState } from 'react';
import { CheckboxProps } from './Checkbox.model';
import classNames from 'classnames';
import Typography from '../Typography';
import './Checkbox.scss';
import { Check } from 'lucide-react';

const Checkbox = ({
	id,
	className,
	variant = 'primary',
	checked = false,
	label,
	disabled,
	full = false,
	onCheck,
	icon,
	iconOnly = false,
	helperText,
	labelFirst = false,
	warning = false,
	boldHeading,
}: CheckboxProps) => {
	const [isChecked, setChecked] = useState(checked);

	useEffect(() => {
		setChecked(checked);
	}, [checked]);
	const classes = classNames(
		className,
		'checkbox',
		{ [`checkbox--${variant}`]: !warning },
		{
			checkbox__disabled: disabled,
		},
		{ 'checkbox--warning': warning }
	);

	const helperTextClasses = classNames('checkbox__container__texts__helper', {
		'checkbox__container__texts__helper--fit': !full,
		'checkbox__container__texts__helper--warning': warning,
	});

	const labelClasses = classNames({
		'checkbox__container__texts__main--fit': !full,
		'checkbox__container__texts__main--warning': warning,
	});

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked);
		onCheck?.(event);
	};
	return (
		<div className={classes}>
			<label className="checkbox__container">
				<input
					id={`${label}-${id}`}
					key={`${label}-${id}`}
					onChange={(e) => handleChange(e)}
					className="checkbox__input"
					type="checkbox"
					disabled={disabled}
					checked={isChecked}
					aria-label={label}
				/>
				<span className="checkbox__checkmark">
					{isChecked && <Check strokeWidth={3} color="white" />}
				</span>
				{!iconOnly ? (
					icon ? (
						labelFirst ? (
							<div className="checkbox__container__icon-with-text">
								<div className="checkbox__container__texts">
									<Typography
										className={labelClasses}
										styling={boldHeading ? 'semibold' : 'regular'}
									>
										{label}
									</Typography>
									{helperText && (
										<Typography className={helperTextClasses}>
											{helperText}
										</Typography>
									)}
								</div>
								{icon}
							</div>
						) : (
							<div className="checkbox__container__icon-with-text">
								{icon}
								<div className="checkbox__container__texts">
									<Typography
										className={labelClasses}
										styling={boldHeading ? 'semibold' : 'regular'}
									>
										{label}
									</Typography>
									{helperText && (
										<Typography className={helperTextClasses}>
											{helperText}
										</Typography>
									)}
								</div>
							</div>
						)
					) : (
						<div className="checkbox__container__texts">
							<Typography
								styling={boldHeading ? 'semibold' : 'regular'}
								className={labelClasses}
							>
								{label}
							</Typography>
							{helperText && (
								<Typography className={helperTextClasses}>
									{helperText}
								</Typography>
							)}
						</div>
					)
				) : (
					icon
				)}
			</label>
		</div>
	);
};

export default Checkbox;
