import React, { useEffect, useState } from 'react';
import { ChipGroup } from './ChipGroup.model';
import { Chip } from '../../atoms';
import './ChipGroup.scss';
import { ChipProps } from '../../atoms/Chip/Chip.model';

const ChipGroup = ({
	chips,
	deleteIcon,
	chipVariant,
	color,
	getSelected,
	multiSelect = false,
}: ChipGroup) => {
	const [selectedChips, setSelectedChips] = useState<string[]>([]);
	const [selectedChip, setSelectedChip] = useState<string | null>(null);
	const [allChips, setChips] = useState<ChipProps[]>(chips);
	useEffect(() => {
		setChips(chips);
	}, []);
	useEffect(() => {
		getSelectedChips();
	}, [selectedChips, selectedChip]);

	const handleSelectUnselect = (label: string, selected: boolean) => {
		if (multiSelect) {
			setSelectedChip(label);
		} else if (!selected) {
			setSelectedChips((prev) => [...prev, label]);
		} else {
			const updatedSelected = selectedChips.filter((item) => item !== label);
			setSelectedChips([...updatedSelected]);
		}
	};

	const removeFromSelected = (label: string) => {
		const updatedSelected = selectedChips.filter((item) => item !== label);
		const updatedChips = allChips.filter((item) => item.label !== label);
		setChips([...updatedChips]);
		setSelectedChips([...updatedSelected]);
		console.log('Deleted', label);
	};

	const getSelectedChips = () => {
		if (multiSelect) {
			getSelected?.(selectedChips);
		} else {
			if (selectedChip) {
				getSelected?.(selectedChip);
			}
		}
	};

	return (
		<div className="chipgroup">
			{allChips?.map((chip, index) => (
				<Chip
					chipVariant={chipVariant}
					color={color}
					DeleteIcon={deleteIcon}
					onChipSelectUnselect={handleSelectUnselect}
					onDelete={removeFromSelected}
					key={index}
					{...chip}
				/>
			))}
		</div>
	);
};

export default ChipGroup;
