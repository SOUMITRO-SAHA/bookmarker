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
  description: string;
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
              <p className="text-xs text-subtle">{description}</p>
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

export const CardGroup = ({ children }: { children: React.ReactNode }) => {
  return <div className={cn("mb-5")}>{children}</div>;
};
