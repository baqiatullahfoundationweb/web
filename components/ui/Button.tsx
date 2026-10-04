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
    teal: "bg-primary hover:bg-primary-dark text-white shadow-sm hover:shadow-md focus:ring-primary/40",
    donate:
      "bg-accent-red hover:bg-accent-red-dark text-white shadow-sm hover:shadow-lg hover:shadow-red-950/15 focus:ring-accent-red/40 font-semibold tracking-wide",
    gold: "bg-amber hover:bg-amber-dark text-gray-950 shadow-sm focus:ring-amber/40 font-semibold",
    outline:
      "border border-primary/20 hover:border-primary bg-white/80 hover:bg-white text-gray-800 hover:text-primary focus:ring-primary/20",
    glass:
      "glass-panel hover:bg-white text-gray-800 border-white/80 hover:border-primary/30 focus:ring-primary/20",
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
