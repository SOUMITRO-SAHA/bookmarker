import { CheckCircleIcon } from "lucide-react";
import React from "react";

interface FormSuccessProps {
  message?: string;
}

export const FormSuccess: React.FC<FormSuccessProps> = ({ message }) => {
  if (!message) return null;
  return (
    <div className="flex items-center p-3 text-sm rounded-md bg-emerald-500/15 gap-x-2 text-success">
      <CheckCircleIcon className="w-4 h-4" />
      <p>{message}</p>
    </div>
  );
};
