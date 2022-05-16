import React from "react";
import "./Button.css";

type ButtonProps = {
  text: string;
  onClick: () => void;
  className: string;
  
  icon?: string;
};
export const Button = ({
  onClick,
  text,
  className,
  icon
  
}: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
      
    >
      <img className="img" src={icon}></img> {text}{" "}
    </button>
  );
};
