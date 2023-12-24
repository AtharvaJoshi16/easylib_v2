import classNames from "classnames";
import Typography from "../Typography";
import { ChipProps } from "./Chip.model";
import React, { useState } from "react";
import "./Chip.scss";

const Chip = ({
  label,
  className,
  color = "primary",
  chipVariant = "contained",
  size = "medium",
  DeleteIcon,
  chipKey,
  onDelete,
  onChipSelectUnselect,
  ...props
}: ChipProps) => {
  const [selected, setSelected] = useState<boolean>(false);
  const classes = classNames(
    className,
    "chip",
    { "chip--with-icon": DeleteIcon },
    `chip--${chipVariant}`,
    `chip--${chipVariant}--${color}`,
    `chip--${size}`,
    { "chip--selected": selected }
  );

  const onChipSelected = () => {
    setSelected(!selected);
    onChipSelectUnselect?.(label, selected);
  };

  const onChipDelete = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    onDelete?.(label);
  };

  return (
    <button key={chipKey} className={classes} onClick={onChipSelected}>
      <Typography {...props}>{label}</Typography>
      <span onClick={(e) => onChipDelete(e)}>
        {DeleteIcon && <DeleteIcon />}
      </span>
    </button>
  );
};

export default Chip;
