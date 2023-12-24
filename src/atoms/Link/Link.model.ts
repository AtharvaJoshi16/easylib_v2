import { AnchorHTMLAttributes } from "react";
import { TypographyProps } from "../Typography/Typography.model";

export interface LinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    TypographyProps {
  children?: string;
  className?: string;
  color?:
    | "default"
    | "white-on-dark"
    | "primary"
    | "secondary"
    | "success"
    | "grey"
    | "error"
    | "warning";
}
