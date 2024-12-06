interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  children: React.ReactNode;
}

export function Button({
  active,
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
          px-5 py-4 rounded-lg text-sm lg:text-xl font-medium transition-colors border border-black
          ${
            active
              ? "bg-black text-white"
              : "bg-white text-black hover:bg-gray-100"
          }
          ${className}
        `}
      {...props}
    >
      {children}
    </button>
  );
}
