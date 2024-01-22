import classNames from 'classnames';
import Typography from '../Typography';
import { ChipProps } from './Chip.model';
import React, { useState } from 'react';
import './Chip.scss';

const Chip = ({
	label,
	className,
	color = 'primary',
	chipVariant = 'contained',
	size = 'medium',
	DeleteIcon,
	clickable = true,
	defaultSelected = false,
	chipKey,
	onDelete,
	onChipAction,
	onClick,
	disabled = false,
	...props
}: ChipProps) => {
	const [selected, setSelected] = useState<boolean>(defaultSelected);

	const classes = classNames(
		className,
		'chip',
		{ 'chip--with-icon': DeleteIcon },
		`chip--${chipVariant}`,
		`chip--${chipVariant}--${color}`,
		`chip--${size}`,
		{ 'chip--selected': selected && !DeleteIcon }
	);

	const chipIconClass = classNames({ chip__delete: !disabled });

	const onChipSelected = () => {
		if (!DeleteIcon) {
			let chip = {
				chipKey,
				label,
				defaultSelected: !selected,
			};
			onChipAction?.(chip);
			setSelected(!selected);
		} else {
			onClick?.(chipKey);
		}
	};

	const onChipDelete = (event: React.MouseEvent<HTMLElement>) => {
		event.stopPropagation();
		onDelete?.(chipKey);
	};

	return (
		<button
			key={chipKey}
			className={classes}
			onClick={clickable ? onChipSelected : () => {}}
			disabled={disabled}
		>
			<Typography {...props}>{label}</Typography>
			{DeleteIcon && clickable && (
				<span
					role="button"
					className={chipIconClass}
					onClick={!disabled ? (e) => onChipDelete(e) : () => {}}
				>
					{DeleteIcon}
				</span>
			)}
		</button>
	);
};

export default Chip;
