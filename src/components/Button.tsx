import React from "react";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  variant?: "primary" | "secondary" | "danger";
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button",
  disabled = false,
  variant = "primary",
  className = "",
}) => {
  const baseStyle = "px-4 py-2 rounded font-medium transition duration-300";
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-gray-200 hover:bg-gray-300 text-black",
    danger: "bg-red-500 hover:bg-red-600 text-white",
  };

  const finalClass = `${baseStyle} ${variants[variant]} ${className}`;

  return (
    <button
      type={type}
      onClick={onClick}
      className={finalClass}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
