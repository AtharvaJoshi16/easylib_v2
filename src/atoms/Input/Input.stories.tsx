import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Input from './Input';

const meta: Meta<typeof Input> = {
	component: Input,
	title: 'Components/Atoms/Input',
};

export default meta;
type Story = StoryObj<typeof Input>;

const handleInputChange = (e) => {
	console.info(e.target.value);
};

export const InputDefault: Story = {
	render: (args) => (
		<div style={{ margin: '30px' }}>
			<Input {...args} />
		</div>
	),
	args: {
		placeholder: 'Enter something...',
		ariaLabel: 'first-name',
		required: true,
		debounce: true,
		debounceTime: 1000,
		onChange: handleInputChange,
	},
};
