import { Tooltip, TooltipContent, TooltipTrigger } from "@/common/ui/tooltip";
import { cn } from "@/lib/utils";

export const CardItem = ({
  title,
  description,
  message,
  titleClassName,
  renderComponent,
  renderModal,
  onClick,
}: {
  title: string;
  description: string | React.ReactNode;
  message?: string;
  titleClassName?: string;
  renderComponent?: React.ReactNode;
  renderModal?: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <>
      {renderModal}
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className="flex items-center justify-between my-5 cursor-pointer"
            onClick={onClick}
          >
            <div>
              <h5 className={cn("text-sm", titleClassName)}>{title}</h5>
              {typeof description === "string" ? (
                <p className="text-xs text-subtle">{description}</p>
              ) : (
                description
              )}
            </div>
            <div>{renderComponent}</div>
          </div>
        </TooltipTrigger>
        {message && (
          <TooltipContent>
            <p>{message}</p>
          </TooltipContent>
        )}
      </Tooltip>
    </>
  );
};

export const CardDivider = ({ className }: { className?: string }) => {
  return <div className={cn("h-[1px] bg-border rounded-full", className)} />;
};

export const CardGroup = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("mb-5", className)}>{children}</div>;
};
