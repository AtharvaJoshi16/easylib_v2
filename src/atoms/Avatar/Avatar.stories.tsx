import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Avatar from './Avatar';
const meta: Meta<typeof Avatar> = {
	component: Avatar,
	title: 'Components/Atoms/Avatar',
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const AvatarDefault: Story = {
	render: (args) => (
		<div style={{ margin: '50px' }}>
			<Avatar {...args} />
		</div>
	),
	args: {
		image: 'https://mui.com/static/images/avatar/2.jpg',
		imageAlt: 'dummy-avatar',
		shape: 'rounded',
		borderColor: 'primary',
		tooltipText: 'Alex Hales',
	},
};
