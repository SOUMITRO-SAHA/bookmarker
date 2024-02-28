import { cn } from "@/lib/utils";

export const PageTitle = ({ children }: { children: React.ReactNode }) => {
  return <h1>{children}</h1>;
};

export const Subtitle = ({ children }: { children: React.ReactNode }) => {
  return <h3>{children}</h3>;
};

export const H3 = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="pb-2 mb-1 text-lg capitalize border-b border-b-border">
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
