import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { CreditCard } from 'lucide-react';
import CheckboxGroup from './CheckboxGroup';
import { CheckboxProps } from '../../atoms/Checkbox/Checkbox.model';

const meta: Meta<typeof CheckboxGroup> = {
	component: CheckboxGroup,
	title: 'Components/Molecules/CheckboxGroup',
};

export default meta;
type Story = StoryObj<typeof CheckboxGroup>;

const handleAction = (selectedItems: CheckboxProps[]) => {
	console.info(selectedItems);
};

export const CheckboxGroupDefault: Story = {
	render: (args) => (
		<div style={{ margin: '30px' }}>
			<CheckboxGroup {...args} />
		</div>
	),
	args: {
		options: [
			{
				id: '1',
				checked: true,
				warning: true,
				label: 'Option 1',
				icon: <CreditCard width={36} height={36} strokeWidth={1.5} />,
				helperText: 'This is helper text',
				boldHeading: true,
			},
			{
				id: '2',
				label: 'Option 2',
				disabled: true,
				icon: <CreditCard width={36} height={36} strokeWidth={1.5} />,
				helperText: 'This is helper text',
				boldHeading: true,
			},
			{
				id: '3',
				label: 'Option 3',
				checked: true,
				icon: <CreditCard width={36} height={36} strokeWidth={1.5} />,
				helperText: 'This is helper text',
				boldHeading: true,
			},
			{
				id: '4',
				label: 'Option 4',
				icon: <CreditCard width={36} height={36} strokeWidth={1.5} />,
				helperText: 'This is helper text',
				boldHeading: true,
			},
		],
		onAction: handleAction,
	},
};
