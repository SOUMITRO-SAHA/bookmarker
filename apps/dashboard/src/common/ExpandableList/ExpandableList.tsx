"use client";
import { H3 } from "@/components/General";
import { Button } from "../Button";
import { DialogComponent } from "../Dialog";
import * as React from "react";
import { ChevronDown, ChevronUp, PlusCircle } from "lucide-react";
import { Input } from "../ui/input";

interface ExpandableListProps<T> {
  items: T[];
  expanded?: boolean;
  title?: string;
  singularTitle?: string;
  createNew?: (value: any) => void;
}

export const CapitalisedString = (inputString: string) => {
  return `${inputString.charAt(0).toUpperCase()}${inputString
    .substring(1)
    .toLowerCase()}`;
};

type FormData = {
  name: string;
};

const initialFormData: FormData = {
  name: "",
};

export function ExpandableList<T>({
  items,
  expanded = false,
  title = "",
  singularTitle = "",
  createNew,
}: ExpandableListProps<T>) {
  const [isExpanded, setIsExpanded] = React.useState(expanded);
  const [formData, setFormData] = React.useState(initialFormData);

  const renderComponent = () => (
    <div>
      <div className="flex items-center gap-5 my-3">
        {/* Category Name */}
        <div className="w-full">
          <div className="mb-2 capitalize">Create New {singularTitle}</div>
          <Input
            className="h-8"
            value={formData.name}
            onChange={(value) =>
              setFormData((prev) => ({
                ...prev,
                name: formData.name,
              }))
            }
          />
        </div>
      </div>
      <div className="flex items-center justify-between mt-5">
        <Button
          variant={"secondary"}
          onClick={() => setFormData(initialFormData)}
        >
          Reset
        </Button>
        <Button onClick={createNew}>Create</Button>
      </div>
    </div>
  );

  const renderItem = (item: any) => (
    <Button key={item?.id} variant={"outline"} size={"sm"}>
      {item?.label}
    </Button>
  );

  return (
    <div>
      <div className="flex justify-between">
        <H3 className="flex items-center justify-between w-full">
          <div className="capitalize">{title}</div>
          <Button
            variant={"ghost"}
            size={"icon"}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </Button>
        </H3>
      </div>
      {isExpanded && (
        <div className="flex items-center gap-2">
          {items.map((item, index) => (
            <React.Fragment key={index}>{renderItem(item)}</React.Fragment>
          ))}
          <DialogComponent
            title={`Create a New ${CapitalisedString(singularTitle)}`}
            renderComponent={renderComponent()}
          >
            <Button variant={"ghost"} size={"icon"}>
              <PlusCircle className="w-5 h-5" />
            </Button>
          </DialogComponent>
        </div>
      )}
    </div>
  );
}
