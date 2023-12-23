import React from "react";
import { ButtonProps } from "./Button.model";
import { Typography } from "../Typography";
import "./Button.scss";
import classNames from "classnames";

const Button = ({
  children,
  className,
  size = "small",
  Icon,
  iconPosition = "left",
  iconOnly = false,
  rounded = false,
  buttonVariant = "contained",
  color = "primary",
  ...props
}: ButtonProps) => {
  const classes = classNames(
    className,
    "btn",
    {
      "btn--rounded": rounded,
    },
    `btn--${size}`,
    {
      [`btn--${buttonVariant}--${color}`]: !(
        buttonVariant === "text-on-dark" || buttonVariant === "text-on-light"
      ),
    },
    `btn--${buttonVariant}`,
    { "btn--icon-only": iconOnly }
  );
  return (
    <button className={classes} {...props}>
      {Icon && iconPosition === "left" && (
        <span className="btn__icon">
          <Icon />
        </span>
      )}
      {children && (
        <Typography {...props} variant="p">
          {children}
        </Typography>
      )}
      {Icon && iconPosition === "right" && (
        <span className="btn__icon">
          <Icon />
        </span>
      )}
    </button>
  );
};

export default Button;
