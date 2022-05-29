import React from "react";
import "./Button.css";

type ButtonProps = {
  text?: string
  disabled?: boolean
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  className?: string
  icon?: any
  alt?: string
}

export const Button = ({
  text,
  disabled = false,
  onClick,
  className = 'primary',
  icon,
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={`button button--${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {icon}
      {text && <span className="button__text">{text}</span>}
    </button>
  )
}