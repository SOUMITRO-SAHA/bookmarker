import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/common/ui/dialog";
import { ListFilter } from "lucide-react";
import { Button } from "../ui/button";

export const Filter = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button
          size={"sm"}
          variant={"outline"}
          className="flex items-center gap-3"
        >
          <ListFilter className="w-4 h-4" />
          <span>Filter</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Filter</DialogTitle>
          <DialogDescription>{children}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
