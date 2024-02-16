import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

interface LoaderProps {
  color?: string;
  size?: number;
}

const Loader: React.FC<LoaderProps> = ({ color = "#fff", size = 150 }) => {
  return (
    <ClipLoader
      color={color}
      size={size}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Loader;
