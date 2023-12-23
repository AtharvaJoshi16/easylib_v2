/* eslint-disable @typescript-eslint/no-explicit-any */
export interface TypographyProps {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  wrap?: boolean;
  children?: string;
  underline?: boolean;
  strike?: boolean;
  italic?: boolean;
  styling?:
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
