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
    sm: "text-xs px-3 sm:px-3.5 py-2.5 sm:py-3 min-h-[40px] gap-1.5",
    md: "text-sm px-4 sm:px-4.5 py-3 sm:py-3.5 min-h-[48px] gap-2",
    lg: "text-sm sm:text-base px-4.5 sm:px-5 py-3.5 sm:py-4 min-h-[54px] gap-2.5 font-semibold",
  };

  const variantStyles = {
    teal: "bg-primary hover:bg-primary-dark text-white shadow-md hover:shadow-lg focus:ring-primary/40 font-semibold",
    donate:
      "bg-accent-red hover:bg-accent-red-dark text-white shadow-md hover:shadow-xl hover:shadow-red-950/40 focus:ring-accent-red/40 font-bold tracking-wide",
    gold: "bg-amber hover:bg-amber-dark text-gray-950 shadow-md focus:ring-amber/40 font-bold",
    outline:
      "border-2 border-primary hover:bg-primary hover:text-white bg-white text-primary shadow-xs font-bold focus:ring-primary/30",
    glass:
      "bg-white hover:bg-gray-100 text-gray-950 border border-gray-200 shadow-md hover:shadow-lg focus:ring-primary/30 font-extrabold",
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
