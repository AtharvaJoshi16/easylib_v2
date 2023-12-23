export interface TypographyProps {
    variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
    noWrap?: boolean;
    children: string;
    underline?: boolean;
    strike?: boolean;
    italic?: boolean;
    style: "light" | "regular" | "medium" | "italic" | "bold" | "semibold" | "extrabold" | "lightitalic" | "mediumitalic" | "bolditalic" | "semibolditalic" | "extrabolditalic";
}
