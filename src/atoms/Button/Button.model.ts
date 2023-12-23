import { ButtonHTMLAttributes } from "react";
import { TypographyProps } from "../Typography/Typography.model";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    TypographyProps {
  children: string;
  buttonVariant?: "text-on-dark" | "text-on-light" | "contained" | "outlined";
  rounded?: boolean;
  color?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "success"
    | "error"
    | "warning"
    | "grey"
    | "light"
    | "dark";
  Icon?: React.ElementType;
  size?: "x-small" | "small" | "medium" | "large";
  iconPosition?: "left" | "right";
}
