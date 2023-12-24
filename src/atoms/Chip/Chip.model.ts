import { Colors } from "../../types/colorTypes";
import { TypographyProps } from "../Typography/Typography.model";

export interface ChipProps extends TypographyProps {
  label: string;
  onDelete?: (label: string) => void;
  onChipSelectUnselect?: (label: string, selected: boolean) => void;
  DeleteIcon?: React.ElementType;
  chipVariant?: "outlined" | "contained";
  color?: Colors;
  size?: "small" | "medium" | "large" | "x-large" | "xx-large";
  className?: string;
  chipKey?: string;
}
