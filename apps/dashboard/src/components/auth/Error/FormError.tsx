import React from "react";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface FormErrorProps {
  message?: string;
}

export const FormError: React.FC<FormErrorProps> = ({ message }) => {
  if (!message) return null;
  return (
    <div className="flex items-center p-3 text-sm rounded-md bg-red-800/15 gap-x-2 text-destructive">
      <ExclamationTriangleIcon className="w-4 h-4" />
      <p>{message}</p>
    </div>
  );
};
