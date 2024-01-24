import React, { useState } from 'react';
import { CheckboxProps } from './Checkbox.model';
import classNames from 'classnames';
import Typography from '../Typography';
import './Checkbox.scss';
import { Check } from 'lucide-react';

const Checkbox = ({
	id,
	className,
	checked,
	label,
	disabled,
	onCheck,
	icon,
	iconOnly,
	helperText,
	warningText,
	boldHeading,
}: CheckboxProps) => {
	const [isChecked, setChecked] = useState(checked);
	const classes = classNames(className, 'checkbox', {
		checkbox__disabled: disabled,
	});

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked);
	};
	return (
		<div className={classes}>
			<label className="checkbox__container">
				<input
					onChange={(e) => handleChange(e)}
					className="checkbox__input"
					type="checkbox"
					disabled={disabled}
					checked={isChecked}
				/>
				<span className="checkbox__checkmark">
					{isChecked && <Check strokeWidth={3} color="white" />}
				</span>
				<div className="checkbox__container__texts">
					<Typography styling={boldHeading ? 'semibold' : 'regular'}>
						{label}
					</Typography>
					{helperText && (
						<Typography className="checkbox__container__texts__helper">
							{helperText}
						</Typography>
					)}
				</div>
			</label>
		</div>
	);
};

export default Checkbox;
