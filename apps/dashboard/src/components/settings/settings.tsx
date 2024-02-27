import { cn } from "@/lib/utils";

export const SettingSideBarDivider = () => {
  return <div className="bg-primary h-[1px] rounded-full my-3" />;
};

export const SettingSideBarItemGroup = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="mb-5">
      <div className="text-xs font-semibold text-subtle">{title}</div>
      <div>{children}</div>
    </div>
  );
};

export const SettingSideBarItem = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "p-2 px-3 my-1 text-sm rounded cursor-pointer hover:bg-subtle",
        className
      )}
    >
      {children}
    </div>
  );
};

export const SettingSideBar = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <aside className={cn("h-screen bg-background-emphasis p-2", className)}>
      {children}
    </aside>
  );
};

export const SettingPageWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <main className="grid grid-cols-12 gap-3">
      {/* Side Bar */}

      {/* Body */}
      <section className="col-span-10">{children}</section>
    </main>
  );
};
