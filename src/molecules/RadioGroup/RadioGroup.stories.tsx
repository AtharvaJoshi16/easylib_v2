import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import RadioGroup from './RadioGroup';
import { Option } from './RadioGroup.model';
import { CreditCard } from 'lucide-react';

const meta: Meta<typeof RadioGroup> = {
	component: RadioGroup,
	title: 'Components/Molecules/RadioGroup',
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

const handleOptionChange = (selected: Option) => {
	console.log(selected);
};

export const RadioDefault: Story = {
	render: (args) => (
		<div style={{ margin: '30px' }}>
			<RadioGroup {...args} />
		</div>
	),
	args: {
		initialSelected: 'Option 2',
		onOptionChange: handleOptionChange,
		warningText: 'Demo warning Text',
		options: [
			{
				value: 'Option 1',
				helperText: 'This is helper text',
				id: '1',
				warning: true,
			},
			{
				value: 'Option 2',
				helperText: 'This is helper text',
				id: '2',
				warning: true,
			},
			{
				value: 'Option 3',
				helperText: 'This is helper text',
				id: '3',
			},
			{
				value: 'Option 4',
				helperText: 'This is helper text',
				id: '4',
			},
			{
				value: 'Option 5',
				helperText: 'This is helper text',
				id: '5',
			},
		],
		icon: <CreditCard />,
		iconWithLabel: true,
		labelFirst: true,
	},
};
