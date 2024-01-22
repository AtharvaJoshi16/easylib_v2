import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Chip from './Chip';
import { XCircle } from 'lucide-react';
import { ChipProps } from './Chip.model';

const meta: Meta<typeof Chip> = {
	component: Chip,
	title: 'Components/Atoms/Chip',
};

export default meta;
type Story = StoryObj<typeof Chip>;

const onSelect = (chip?: ChipProps) => {
	console.log(chip);
};

const onClick = () => {
	console.log('Clicked');
};

const onDelete = () => {
	console.log('Deleted');
};

export const ChipDefault: Story = {
	render: (args) => (
		<div style={{ margin: '30px', display: 'flex', justifyContent: 'center' }}>
			<Chip {...args} />
		</div>
	),
	args: {
		label: 'Chip',
		chipKey: 'demo-1',
		clickable: true,
		defaultSelected: true,
		DeleteIcon: <XCircle />,
		onChipAction: onSelect,
		onDelete: onDelete,
		onClick: onClick,
	},
};
