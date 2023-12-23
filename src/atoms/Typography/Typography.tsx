import classNames from "classnames";
import { TypographyProps } from "./Typography.model";
import React from "react";
import "./Typography.scss";

export const Typography = ({
  variant = "p",
  wrap = false,
  children,
  underline = false,
  strike = false,
  italic = false,
  styling = "regular",
  fontWeight = "medium",
  style,
  className,
}: TypographyProps) => {
  const classes = classNames(
    className,
    "typography",
    `typography--${variant}`,
    { ["typography--wrap"]: wrap },
    { ["typography--nowrap"]: !wrap },
    { ["typography--underline"]: underline },
    { ["typography--strike"]: strike },
    { ["typography--italic"]: italic },
    { [`typography--font-weight--${fontWeight}`]: fontWeight },
    `typography--${styling}`
  );
  const Tag = variant as keyof JSX.IntrinsicElements;

  return (
    <Tag style={style} className={classes}>
      {children}
    </Tag>
  );
};
