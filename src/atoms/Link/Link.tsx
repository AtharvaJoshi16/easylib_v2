import Typography from '../Typography';
import { LinkProps } from './Link.model';
import React from 'react';
import './Link.scss';
import classNames from 'classnames';

const Link = ({
	children,
	className,
	color = 'default',
	...props
}: LinkProps) => {
	const classes = classNames(className, 'link', `link--${color}`);
	return (
		<a className={classes} {...props}>
			<Typography {...props}>{children}</Typography>
		</a>
	);
};

export default Link;
