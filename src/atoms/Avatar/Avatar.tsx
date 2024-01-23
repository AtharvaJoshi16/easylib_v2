import React from 'react';
import { AvatarProps } from './Avatar.model';
import classNames from 'classnames';
import './Avatar.scss';
import Typography from '../Typography';
const Avatar = ({
	image,
	imageAlt,
	firstName,
	lastName,
	ref,
	size = 36,
	tooltipText,
	shape = 'rounded',
	onClick,
	borderColor,
	className,
}: AvatarProps) => {
	const classes = classNames(className, 'avatar', `avatar--${shape}`, {
		[`avatar--border--${borderColor}`]: borderColor,
		avatar__initials: firstName,
	});
	return firstName ? (
		<div
			style={{ height: size, width: size, fontSize: size / 1.8 }}
			title={`${firstName} ${lastName}`}
			className={classes}
			onClick={onClick}
		>
			<Typography styling="regular">
				{lastName ? `${firstName[0]}${lastName[0]}` : firstName[0]}
			</Typography>
		</div>
	) : (
		<img
			ref={ref}
			title={tooltipText ?? ''}
			className={classes}
			src={image}
			alt={imageAlt}
			height={size}
			width={size}
			onClick={(event) => onClick?.(event)}
		/>
	);
};

export default Avatar;
