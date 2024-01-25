import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Checkbox from './Checkbox';
import { CreditCard } from 'lucide-react';

const meta: Meta<typeof Checkbox> = {
	component: Checkbox,
	title: 'Components/Atoms/Checkbox',
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
	console.log(event);
};

export const CheckboxDefault: Story = {
	render: (args) => (
		<div style={{ margin: '50px' }}>
			<Checkbox {...args} />
		</div>
	),
	args: {
		id: '1',
		label: 'Option 1',
		icon: <CreditCard width={36} height={36} strokeWidth={1.5} />,
		helperText: 'This is helper text',
		boldHeading: true,
		onCheck: handleCheck,
	},
};
