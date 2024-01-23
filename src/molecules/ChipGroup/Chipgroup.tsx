import React, { useCallback, useEffect, useState } from 'react';
import { ChipGroup } from './ChipGroup.model';
import { Chip, Typography } from '../../atoms';
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
	displayLimit,
	onChipClick,
}: ChipGroup) => {
	//TODO: default selected chips
	const [selectedChips, setSelectedChips] = useState<ChipProps[]>([]);
	const [allChips, setAllChips] = useState<ChipProps[]>(chipList);
	const [selectedChip, setSelectedChip] = useState<ChipProps | null>(null);
	const multiSelectOptions = !deleteIcon ? multiSelect : false;
	const finalLength = allChips.length - allChips.slice(0, displayLimit).length;
	useEffect(() => {
		let selected = allChips?.filter((item) => item.defaultSelected);
		setSelectedChips(selected);
	}, []);
	useEffect(() => {
		getSelectedChips();
	}, [selectedChips, selectedChip, allChips]);

	const handleSelectUnselect = (chip: ChipProps) => {
		if (!multiSelectOptions) {
			allChips.forEach((item) => {
				item.defaultSelected = false;
			});
			const selectedIdx = allChips?.findIndex(
				(item) => item.chipKey === chip.chipKey
			);
			let updatedAllChips = [...allChips];
			setSelectedChip(updatedAllChips[selectedIdx]);
			updatedAllChips[selectedIdx] = chip;
			setAllChips([...updatedAllChips]);
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
			{displayLimit
				? allChips
						.slice(0, displayLimit)
						?.map((chip, index) => (
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
						))
				: allChips?.map((chip, index) => {
						return (
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
						);
					})}
			{!!displayLimit && !!finalLength && (
				<span>
					<Typography className="chipgroup__limit">
						{`+ ${finalLength} More`}
					</Typography>
				</span>
			)}
		</div>
	);
};

export default ChipGroup;
