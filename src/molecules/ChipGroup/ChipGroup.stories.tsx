import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import ChipGroup from './Chipgroup';
import { ChipProps } from '../../atoms/Chip/Chip.model';
import { XCircle } from 'lucide-react';

const meta: Meta<typeof ChipGroup> = {
	component: ChipGroup,
	title: 'Components/Molecules/ChipGroup',
	argTypes: {
		chipVariant: {
			options: ['contained', 'outlined'],
		},
	},
};

export default meta;
type Story = StoryObj<typeof ChipGroup>;

const getSelectedChips = (chips?: ChipProps[]) => {
	console.log(chips);
};

const handleChipClick = (chipKey: string) => {
	console.log('Clicked', chipKey);
};

export const ChipGroupDefault: Story = {
	render: (args) => (
		<div style={{ margin: '30px', width: '600px' }}>
			<ChipGroup {...args} />
		</div>
	),
	args: {
		multiSelect: true,
		chipVariant: 'outlined',
		color: 'secondary',
		getSelected: getSelectedChips,
		chipList: [
			{
				chipKey: 'demo-1',
				label: 'Carbs',
				defaultSelected: true,
			},
			{
				chipKey: 'demo-2',
				label: 'Fats',
			},
			{
				chipKey: 'demo-3',
				label: 'Messages',
				disabled: true,
			},
			{
				chipKey: 'demo-4',
				label: 'Demo',
			},
			{
				chipKey: 'demo-5',
				label: 'Demo2',
				disabled: true,
			},
			{
				chipKey: 'demo-6',
				label: 'Chips',
			},
			{
				chipKey: 'demo-7',
				label: 'Deserts',
			},
			{
				chipKey: 'demo-8',
				label: 'Salads',
			},
		],
		deleteIcon: <XCircle />,
		onChipClick: handleChipClick,
		size: 'medium',
	},
};
