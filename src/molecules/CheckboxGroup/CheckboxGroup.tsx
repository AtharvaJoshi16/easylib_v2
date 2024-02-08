import { Checkbox, Typography } from '../../atoms';
import React, { useEffect, useState } from 'react';
import { CheckboxGroupProps } from './CheckboxGroup.model';
import './CheckboxGroup.scss';
import classNames from 'classnames';
import { CheckboxProps } from '../../atoms/Checkbox/Checkbox.model';

const CheckboxGroup = ({
	options,
	warningText,
	variant = 'primary',
	full = false,
	alignment = 'vertical',
	boldHeading = false,
	onAction,
	className,
}: CheckboxGroupProps) => {
	const classes = classNames(
		'checkbox-group',
		className,
		`checkbox-group--${alignment}`,
		{ 'checkbox-group--full': full }
	);
	const [selected, setSelected] = useState<CheckboxProps[]>([]);

	useEffect(() => {
		const initialSelected = options?.filter((option) => option?.checked);
		setSelected([...initialSelected]);
	}, [options]);

	const handleCheckboxAction = (
		event: React.ChangeEvent<HTMLInputElement>,
		option: CheckboxProps
	) => {
		if (event.target.checked) {
			let copyofSelected = [...selected];
			copyofSelected.push(option);
			onAction?.(copyofSelected);
			setSelected(copyofSelected);
		} else {
			let copyofSelected = [...selected];
			copyofSelected = copyofSelected.filter((item) => item.id !== option.id);
			onAction?.(copyofSelected);
			setSelected(copyofSelected);
		}
	};

	return (
		<>
			<div className={classes}>
				{options?.map((option) => (
					<Checkbox
						key={option.id}
						boldHeading={boldHeading}
						full={full}
						variant={variant}
						{...option}
						onCheck={(e) => handleCheckboxAction(e, option)}
					/>
				))}
			</div>
			{warningText && (
				<Typography className="checkbox-group__warning-text">
					{warningText}
				</Typography>
			)}
		</>
	);
};

export default CheckboxGroup;
