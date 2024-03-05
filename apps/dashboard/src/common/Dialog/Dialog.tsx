import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/common/ui/dialog";

export const DialogComponent = ({
  children,
  title,
  renderComponent,
}: {
  title: string;
  renderComponent: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{renderComponent}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
