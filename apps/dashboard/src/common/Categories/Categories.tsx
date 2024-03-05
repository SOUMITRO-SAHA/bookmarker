import { Button } from "@/common/Button";
import { H3 } from "@/components/General";
import { Category } from "@/lib/constant";
import { cn } from "@/lib/utils";
import { PlusCircle } from "lucide-react";
import { DialogComponent } from "../Dialog";
import { Input } from "../ui/input";

const availableColors = [
  "#fff",
  "#4CC9F0",
  "#480CA8",
  "#F72585",
  "#FFB703",
  "#FB8500",
  "#023047",
  "#000",
];

export const Categories = ({ lists }: { lists: Category[] }) => {
  const renderComponent = () => {
    return (
      <div>
        <div className="flex items-center gap-5 my-3">
          {/* Category Name */}
          <div className="w-full">
            <div className="mb-2">Category Name</div>
            <Input className={cn("h-8")} />
          </div>
        </div>
        <div className="flex items-center justify-between mt-5">
          <Button variant={"secondary"}>Reset</Button>
          <Button>Create</Button>
        </div>
      </div>
    );
  };

  return (
    <div>
      <H3 className="mb-3">Categories</H3>
      <div className="flex items-center gap-2">
        {lists.map((item) => (
          <Button key={item.id} variant={"outline"} size={"sm"}>
            {item.label}
          </Button>
        ))}
        <DialogComponent
          title="Create a New Category"
          renderComponent={renderComponent()}
        >
          <Button variant={"ghost"} size={"icon"}>
            <PlusCircle className="w-5 h-5" />
          </Button>
        </DialogComponent>
      </div>
    </div>
  );
};
