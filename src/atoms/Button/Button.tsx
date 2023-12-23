import React from "react";
import { ButtonProps } from "./Button.model";

const Button = ({ children }: ButtonProps) => {
  return <button>{children}</button>;
};

export default Button;
