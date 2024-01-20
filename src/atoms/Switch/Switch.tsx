import React from 'react';
import { SwitchProps } from './Switch.model';
import './Switch.scss';

const Switch = ({ checked, label }: SwitchProps) => {
	return (
		<div className="switch">
			<input
				className="switch-checkbox"
				type="checkbox"
				name={label}
				id={label}
			/>
			<label className="switch__label" htmlFor={label}>
				<span className="inner" />
				<span className="switch__toggle" />
			</label>
		</div>
	);
};

export default Switch;
