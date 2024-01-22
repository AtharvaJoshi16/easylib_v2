import React, { useState } from 'react';
import { SwitchProps } from './Switch.model';
import './Switch.scss';
import Typography from '../Typography';
import classNames from 'classnames';

const Switch = ({
	label,
	className,
	variant = 'primary',
	alignment = 'horizontal',
	size = 'medium',
	defaultChecked = false,
	switchKey,
	onIcon,
	offIcon,
	onChange,
}: SwitchProps) => {
	const [checked, setChecked] = useState(defaultChecked);
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked);
		onChange?.(event);
	};

	const containerClasses = classNames(
		className,
		'container',
		`container--${alignment}`
	);
	const toggleClasses = classNames('switch__toggle', {
		'switch__toggle--off': !checked,
	});
	const switchClasses = classNames(
		'switch',
		`switch--${variant}`,
		`switch--${size}`
	);
	return (
		<div className={containerClasses}>
			<Typography>{label}</Typography>
			<div className={switchClasses}>
				<input
					className="switch-checkbox"
					type="checkbox"
					name={switchKey}
					id={switchKey}
					onChange={handleChange}
					checked={checked}
					aria-label={switchKey}
					aria-labelledby={switchKey}
				/>
				<label className="switch__label" htmlFor={switchKey}>
					<span className="switch__inner" />
					<span className={toggleClasses}>{checked ? onIcon : offIcon}</span>
				</label>
			</div>
		</div>
	);
};

export default Switch;
