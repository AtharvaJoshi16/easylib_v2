import React from 'react';
import { AvatarProps } from './Avatar.model';
import classNames from 'classnames';
import './Avatar.scss';
const Avatar = ({
	image,
	imageAlt,
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
	});
	return (
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
