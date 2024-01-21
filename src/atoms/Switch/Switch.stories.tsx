import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Switch from './Switch';
import { Frown, Laugh } from 'lucide-react';

const meta: Meta<typeof Switch> = {
	component: Switch,
	title: 'Components/Atoms/Switch',
};

export default meta;
type Story = StoryObj<typeof Switch>;

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
	console.log(event.target.checked);
};

export const SwitchDefault: Story = {
	render: (args) => (
		<div style={{ margin: '50px' }}>
			<Switch {...args} />
		</div>
	),
	args: {
		label: 'Show Video',
		switchKey: 'demo-1',
		onIcon: <Laugh />,
		offIcon: <Frown />,
		onChange: handleChange,
		defaultChecked: true,
	},
};

export const SwitchSizes: Story = {
	render: (args) => (
		<div style={{ margin: '50px', display: 'flex', gap: '20px' }}>
			<Switch size="small" {...args} switchKey="demo-1" />
			<Switch {...args} switchKey="demo-2" />
			<Switch size="large" {...args} switchKey="demo-3" />
		</div>
	),
	args: {
		label: 'Show Video',
		alignment: 'vertical',
		onIcon: <Laugh />,
		offIcon: <Frown />,
		onChange: handleChange,
		defaultChecked: true,
	},
};
