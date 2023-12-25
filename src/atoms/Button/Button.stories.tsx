import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Button from './Button';
import { Heart } from 'lucide-react';
const meta: Meta<typeof Button> = {
	component: Button,
	title: 'Components/Atoms/Button',
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonDefault: Story = {
	render: (args) => (
		<>
			<div
				style={{
					width: '200px',
					padding: '30px',
					display: 'flex',
					justifyContent: 'center',
					background: '#0a2343',
				}}
			>
				<Button {...args}>DEMO</Button>
			</div>
			<div
				style={{
					width: '200px',
					padding: '30px',
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<Button {...args}>DEMO</Button>
			</div>
			<div
				style={{
					width: '200px',
					padding: '30px',
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<Button {...args} />
			</div>
		</>
	),
	args: {
		rounded: true,
		size: 'x-small',
		disabled: false,
		Icon: Heart,
		iconPosition: 'right',
	},
};
