import React from "react";
import cn from "classnames";

interface InputFieldProps {
  type: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const InputField = ({
  type,
  placeholder,
  value,
  onChange,
  className,
}: InputFieldProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={cn(
        "w-full py-3 px-4 border border-gray-300 rounded-md",
        className
      )}
    />
  );
};

export default InputField;
