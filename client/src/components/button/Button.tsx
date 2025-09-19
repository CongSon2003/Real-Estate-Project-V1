'use client'
import React, { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type typeButton = {
  className?: string;
  type?: "button" | "submit" | "reset";
  children: ReactNode; // nội dung bên trong (text hoặc icon)
  isLoading?: boolean;
  size?: string
} & ButtonHTMLAttributes<HTMLButtonElement>; // kế thừa các props mặc định của button;
const sizeStyles: Record<string, string> = {
  sm: "px-3 py-1 text-sm",
  md: "px-4, py-2 text-base",
  lg: "px-6, py-3 text-lg",
}
function Button({ className, type = 'button', children, isLoading, size = "md", ...props }: typeButton) {
  return (
    <button {...props} type={type} className={clsx('bg-primary-500 rounded-md',sizeStyles[size], className)}>
      { isLoading ? (<div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"/>) : children}
    </button>
  );
}

export default Button;
