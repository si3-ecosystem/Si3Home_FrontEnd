import { ButtonHTMLAttributes, FC } from "react";
import cn from "classnames";

type ButtonVariant = "primary" | "secondary" | "danger" | "outline";
type ButtonSize = "small" | "medium" | "large";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

const baseStyles =
  "inline-flex items-center border border-transparent font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg";
const variantStyles = {
  primary: "text-white bg-black",
  secondary: "text-gray-700 bg-gray-100 hover:bg-gray-200 focus:ring-gray-500",
  danger: "text-white bg-red-600 hover:bg-red-700 focus:ring-red-500",
  outline: "text-white font-medium border border-white rounded-lg py-2 px-2.5",
};
const sizeStyles = {
  small: "px-2.5 py-1.5 text-xs",
  medium: "px-3 py-2 text-sm",
  large: "px-4 py-2 text-base",
};

const Button: FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  className,
  children,
  ...props
}) => {
  const buttonClassNames = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  return (
    <button className={buttonClassNames} {...props}>
      {children}
    </button>
  );
};

export default Button;
