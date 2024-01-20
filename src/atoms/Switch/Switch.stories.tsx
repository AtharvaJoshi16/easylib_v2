import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Switch from './Switch';

const meta: Meta<typeof Switch> = {
	component: Switch,
	title: 'Components/Atoms/Switch',
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const SwitchDefault: Story = {
	render: (args) => (
		<div style={{ margin: '50px' }}>
			<Switch {...args} />
		</div>
	),
	args: {},
};
