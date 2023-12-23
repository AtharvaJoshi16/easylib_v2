/* eslint-disable @typescript-eslint/no-explicit-any */
export interface TypographyProps {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  noWrap?: boolean;
  wrap?: boolean;
  children: string;
  underline?: boolean;
  strike?: boolean;
  italic?: boolean;
  fontWeight?:
    | "lighter"
    | "light"
    | "medium"
    | "bold"
    | "bolder"
    | "x-bold"
    | "xx-bold"
    | "xxx-bold";
  styling:
    | "light"
    | "regular"
    | "medium"
    | "italic"
    | "bold"
    | "semibold"
    | "extrabold"
    | "lightitalic"
    | "mediumitalic"
    | "bolditalic"
    | "semibolditalic"
    | "extrabolditalic";
  style?: React.CSSProperties;
  className?: string;
}
