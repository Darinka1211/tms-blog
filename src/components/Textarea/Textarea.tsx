import { useState } from "react";
import "./Textarea.css";

type TextareaProps = {
  text: string;
  className: string;
  disabled?: boolean;
  placeholder: string;
  type: string;
  classNameTextarea: string;
  value?: string;
};

export const Textarea = (props: TextareaProps) => {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (event: any) => {
    setInputValue(event.target.value);
  };
  return (
    <div className={props.className}>
      <textarea
        className={props.classNameTextarea}
        placeholder={props.placeholder}
        disabled={props.disabled}
      />
    </div>
  );
};
