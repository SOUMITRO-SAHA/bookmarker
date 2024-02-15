"use client";
import * as React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className="bg-red-500 p-3 w-[200px] cursor-pointer">
      {children}
    </button>
  );
};
