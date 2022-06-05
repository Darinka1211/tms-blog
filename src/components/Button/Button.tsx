import React from "react";
import "./Button.css";

type ButtonProps = {
  text: string;
  onClick: () => void;
  className: string;
  disable: boolean;
  icon?: string;
};
export const Button = ({
  onClick,
  text,
  className,
  icon,
  disable,
}: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
      disabled={disable}
    >
      <img className="img" src={icon}></img> {text}{" "}
    </button>
  );
};
