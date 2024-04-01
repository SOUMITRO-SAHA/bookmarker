import { BrandTitle } from "@/lib/constant";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { title } from "process";
import React from "react";

export const TitleHeader = ({
  title,
  subtitle,
  description,
  className,
}: {
  title?: string;
  subtitle?: string;
  description?: string;
  className?: string;
}) => {
  return (
    <>
      <h1 className={cn("text-3xl text-center font-bold ", className)}>
        {BrandTitle}
      </h1>
      <h3 className="my-6 font-bold text-center uppercase text-7xl">{title}</h3>
      <h5 className="text-2xl text-center capitalize text-muted">{subtitle}</h5>
      <p className="my-4 text-base text-center text-accent-foreground">
        {description}
      </p>
    </>
  );
};

export const PageTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h1 className={cn("text-3xl text-center font-bold my-10", className)}>
      {children}
    </h1>
  );
};

export const Subtitle = ({ children }: { children: React.ReactNode }) => {
  return <h3>{children}</h3>;
};

export const H3 = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "pb-2 mb-1 text-lg capitalize border-b border-b-border",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const H4 = ({ children }: { children: React.ReactNode }) => {
  return <h4 className={cn("capitalize text-subtle")}>{children}</h4>;
};

// General Styles
export const getOverlayStyle = (isOpen = false) => {
  const overlayClasses = cn(
    isOpen
      ? "h-screen w-screen fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out z-10"
      : "hidden"
  );

  return overlayClasses;
};

export const getPopupStyle = (isOpen = false) => {
  const popupClasses = cn(
    isOpen
      ? "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-md shadow-md w-[600px]"
      : "hidden"
  );

  return popupClasses;
};
