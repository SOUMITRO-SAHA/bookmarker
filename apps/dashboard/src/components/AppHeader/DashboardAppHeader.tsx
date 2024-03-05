"use client";
import { Button } from "@/common/Button";
import { Filter } from "@/common/Filter";
import { ArrowDownNarrowWide, ArrowUpWideNarrow } from "lucide-react";
import * as React from "react";

export type DashboardProps = {
  renderFilterDialog?: React.ReactNode;
};

export const DashboardAppHeader = (props: DashboardProps) => {
  const { renderFilterDialog, ...rest } = props;
  const [assendingOrder, setAssendingOrder] = React.useState(false);

  return (
    <div className="flex items-center justify-end gap-2 col-span-full">
      <Button variant={"outline"} size={"sm"}>
        Today
      </Button>
      <Button variant={"outline"} size={"sm"}>
        This Week
      </Button>
      <Button variant={"outline"} size={"sm"}>
        This Month
      </Button>
      <Button
        variant={"outline"}
        size={"icon"}
        onClick={() => setAssendingOrder(!assendingOrder)}
      >
        {assendingOrder ? (
          <ArrowDownNarrowWide className="w-4 h-4 text-accent-foreground" />
        ) : (
          <ArrowUpWideNarrow className="w-4 h-4 text-accent-foreground" />
        )}
      </Button>
      <Filter>{renderFilterDialog}</Filter>
    </div>
  );
};
