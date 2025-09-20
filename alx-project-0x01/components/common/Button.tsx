import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className = "",
  children,
  disabled,
  ...props
}) => {
  const base =
    "px-4 py-2 rounded-md border transition focus:outline-none focus:ring disabled:opacity-60 disabled:cursor-not-allowed";
  const styles =
    variant === "primary"
      ? "bg-blue-600 text-white border-blue-600 hover:bg-blue-700 focus:ring-blue-300"
      : "bg-white text-gray-900 border-gray-300 hover:bg-gray-50 focus:ring-gray-300";

  return (
    <button className={`${base} ${styles} ${className}`} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;
