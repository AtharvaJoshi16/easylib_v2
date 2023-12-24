import { ButtonHTMLAttributes } from "react";
import { TypographyProps } from "../Typography/Typography.model";
import { Colors } from "../../types/colorTypes";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    TypographyProps {
  children?: string;
  buttonVariant?: "text-on-dark" | "text-on-light" | "contained" | "outlined";
  rounded?: boolean;
  color?: Colors;
  Icon?: React.ElementType;
  size?: "x-small" | "small" | "medium" | "large";
  iconPosition?: "left" | "right";
  iconOnly?: boolean;
  full?: boolean;
}
