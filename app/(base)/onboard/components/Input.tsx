import { cn } from "@/lib/utils";
import {
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  useState,
} from "react";

interface InputFieldProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: ReactNode;
  className?: string;
  extraClassName?: string;
  required?: boolean;
}

interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: ReactNode;
  placeholder?: string;
  options: {
    label: string;
    value: string;
  }[];
  className?: string;
  isRoobert?: boolean;
}

interface CheckBoxFieldProps {
  checked?: boolean;
  handleCheck?: () => void;
  label: ReactNode;
  className?: string;
}

export function InputField(props: InputFieldProps) {
  return (
    <div className="my-2 w-full">
      <label
        htmlFor=""
        className={`block text-sm sm:text-lg capitalize ${props.className}`}
      >
        {props.label}
        {props.required && <span className="text-[#FF2727]">*</span>}
      </label>
      <input
        {...props}
        type="text"
        className="w-full text-xs sm:text-base h-12 px-6 mt-1 rounded-lg p-2 border border-[#BDBDBD]"
      />
    </div>
  );
}
export function SelectField(props: SelectFieldProps) {
  return (
    <div className="my-2">
      <label
        htmlFor=""
        className={`block text-sm sm:text-lg capitalize  ${props.className} ${props?.isRoobert ? "" : "font-mono"}`}
      >
        {props.label}
        {props.required && <span className="text-[#FF2727]">*</span>}
      </label>
      <select
        {...props}
        className="w-full h-12 px-6 font-dm-sans mt-1 rounded-lg p-2 border border-[#BDBDBD]"
      >
        {props.placeholder && <option value={""}>{props.placeholder}</option>}
        {props.options.map((item) => (
          <option key={item.label} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export function TextAreaField(props: InputFieldProps) {
  return (
    <div className="my-2">
      <label
        htmlFor=""
        className={`block text-sm sm:text-lg capitalize font-mono ${props.className}`}
      >
        {props.label}
        {props.required && <span className="text-[#FF2727]">*</span>}
      </label>
      <textarea
        {...props}
        className={cn(
          "w-full h-[155px] text-xs sm:text-base px-6 font-dm-sans mt-1 rounded-lg p-2 border border-[#BDBDBD]",
          props.extraClassName
        )}
      />
    </div>
  );
}

export function RadioInputField(props: CheckBoxFieldProps) {
  return (
    <div className="flex items-center gap-x-4 text-sm">
      <button
        type="button"
        onClick={props.handleCheck}
        className="border border-[rgba(18,15,34,0.6)] inline-flex items-center justify-center h-5 w-5 rounded-full"
      >
        {props.checked && (
          <span className="h-[12px] inline-block w-[12px] bg-[#000] rounded-md"></span>
        )}
      </button>
      <p className={`text-[#1E1E1E] text-base ${props.className}`}>
        {props.label}
      </p>
    </div>
  );
}
export function CheckBoxField(props: CheckBoxFieldProps) {
  function getActiveClass() {
    if (props.checked) {
      return "bg-[#000]";
    }
    return "border border-[rgba(18,15,34,0.6)]";
  }

  const activeClassName = getActiveClass();

  return (
    <div className="flex items-center gap-x-6 text-sm">
      <button
        type="button"
        onClick={props.handleCheck}
        className={` ${activeClassName} rounded inline-flex items-center justify-center h-5 w-5`}
      >
        {props.checked && (
          <span>
            <i className="bi bi-check text-xl text-white"></i>
          </span>
        )}
      </button>
      <p
        className={`text-black text-xs md:text-sm capitalize ${props.className}`}
      >
        {props.label}
      </p>
    </div>
  );
}
