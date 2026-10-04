import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "teal" | "donate" | "gold" | "outline" | "glass";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  variant = "teal",
  size = "md",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-xl cursor-pointer transition-all duration-200 interactive-tap select-none focus:outline-none focus:ring-2 focus:ring-offset-2";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5 font-semibold",
  };

  const variantStyles = {
    teal: "bg-[#008B8B] hover:bg-[#007373] text-white shadow-sm hover:shadow-md focus:ring-[#008B8B]/40",
    donate:
      "bg-[#AF0000] hover:bg-[#930000] text-white shadow-sm hover:shadow-lg hover:shadow-red-950/10 focus:ring-[#AF0000]/40 font-semibold tracking-wide",
    gold: "bg-[#FFBF00] hover:bg-[#E5AC00] text-gray-950 shadow-sm focus:ring-[#FFBF00]/40 font-semibold",
    outline:
      "border border-gray-200 hover:border-[#008B8B] bg-white hover:bg-gray-50 text-gray-800 hover:text-[#008B8B] focus:ring-[#008B8B]/20",
    glass:
      "glass-panel hover:bg-white text-gray-800 border-white/80 hover:border-[#008B8B]/30 focus:ring-[#008B8B]/20",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
