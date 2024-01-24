import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Checkbox from './Checkbox';

const meta: Meta<typeof Checkbox> = {
	component: Checkbox,
	title: 'Components/Atoms/Checkbox',
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const CheckboxDefault: Story = {
	render: (args) => (
		<div style={{ margin: '50px' }}>
			<Checkbox {...args} />
		</div>
	),
	args: {
		id: '1',
		label: 'Option 1',
		helperText: 'This is helper text',
		boldHeading: true,
	},
};
