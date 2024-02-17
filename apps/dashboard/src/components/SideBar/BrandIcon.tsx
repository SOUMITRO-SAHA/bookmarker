"use client";
import * as React from "react";

interface BrandIconProps {
  //Props
}

const BrandIcon: React.FC<BrandIconProps> = () => {
  const theme = localStorage.getItem("theme");

  return (
    <svg
      viewBox="0 0 1024 1024"
      className="w-full h-full icon"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M789.333333 917.333333l-277.333333-128-277.333333 128V192c0-46.933333 38.4-85.333333 85.333333-85.333333h384c46.933333 0 85.333333 38.4 85.333333 85.333333v725.333333z"
        fill={theme === "dark" ? "#f2f2f2" : "#050505"}
      />
    </svg>
  );
};

export default BrandIcon;
