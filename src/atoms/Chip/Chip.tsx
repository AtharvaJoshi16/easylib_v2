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
	selectable = false,
	defaultSelected = false,
	chipKey,
	onDelete,
	onChipSelectUnselect,
	onClick,
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
		{ 'chip--selected': selected && selectable }
	);

	const onChipSelected = () => {
		if (selectable && !clickable) {
			setSelected(!selected);
			onChipSelectUnselect?.(label, !selected);
		}
	};

	const onChipDelete = (event: React.MouseEvent<HTMLElement>) => {
		event.stopPropagation();
		onDelete?.(label);
	};

	return (
		<button
			key={chipKey}
			className={classes}
			onClick={
				selectable && !clickable
					? onChipSelected
					: clickable && !selectable
						? onClick
						: () => {}
			}
		>
			<Typography {...props}>{label}</Typography>
			{DeleteIcon && clickable && !selectable && (
				<span onClick={(e) => onChipDelete(e)}>
					<DeleteIcon />
				</span>
			)}
		</button>
	);
};

export default Chip;
