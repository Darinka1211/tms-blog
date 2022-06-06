import React from "react";
import "./Button.css";

type ButtonProps = {
  text: string;
  onClick?: () => void;
  className: string;
  disabled?: boolean;
  icon?: any;
};
export const Button = ({
  onClick,
  text,
  className,
  icon,
  disabled,
}: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
      disabled={disabled}
    >
      <img className="img" src={icon}></img> {text}{" "}
    </button>
  );
};
