import React, { useCallback, useEffect, useState } from 'react';
import { ChipGroup } from './ChipGroup.model';
import { Chip } from '../../atoms';
import './ChipGroup.scss';
import { ChipProps } from '../../atoms/Chip/Chip.model';

const ChipGroup = ({
	chipList,
	deleteIcon,
	chipVariant,
	color,
	getSelected,
	multiSelect = false,
	clickable = true,
	size = 'small',
	onChipClick,
}: ChipGroup) => {
	//TODO: default selected chips
	const [selectedChips, setSelectedChips] = useState<ChipProps[]>([]);
	const [allChips, setAllChips] = useState<ChipProps[]>(chipList);
	const [selectedChip, setSelectedChip] = useState<ChipProps | null>(null);
	const multiSelectOptions = !deleteIcon ? multiSelect : false;
	useEffect(() => {
		let selected = allChips?.filter((item) => item.defaultSelected);
		setSelectedChips(selected);
	}, []);
	useEffect(() => {
		getSelectedChips();
	}, [selectedChips, selectedChip, allChips]);

	const handleSelectUnselect = (chip: ChipProps) => {
		if (!multiSelectOptions) {
			setSelectedChip(chip);
		} else if (chip?.defaultSelected) {
			setSelectedChips((chips) => [...chips, chip]);
		} else if (!chip?.defaultSelected) {
			let copyOfSelectedChips = [...selectedChips];
			copyOfSelectedChips = copyOfSelectedChips?.filter(
				(copy) => copy.chipKey !== chip.chipKey
			);
			setSelectedChips([...copyOfSelectedChips]);
		}
	};

	const removeFromSelected = (chipKey: string) => {
		let copyOfAllChips = [...allChips];
		copyOfAllChips = copyOfAllChips?.filter((copy) => copy.chipKey !== chipKey);
		setAllChips([...copyOfAllChips]);
	};

	const getSelectedChips = () => {
		if (multiSelectOptions) {
			getSelected?.(selectedChips);
		} else if (deleteIcon) {
			getSelected?.(allChips);
		} else {
			if (selectedChip) {
				getSelected?.([selectedChip]);
			}
		}
	};

	return (
		<div className="chipgroup">
			{allChips?.map((chip, index) => (
				<Chip
					chipVariant={chipVariant}
					color={color}
					size={size}
					DeleteIcon={deleteIcon}
					clickable={clickable}
					onClick={onChipClick}
					onChipAction={handleSelectUnselect}
					onDelete={removeFromSelected}
					key={index}
					defaultSelected={chip?.defaultSelected}
					{...chip}
				/>
			))}
		</div>
	);
};

export default ChipGroup;
