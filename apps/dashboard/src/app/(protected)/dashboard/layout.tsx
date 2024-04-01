import { Button } from "@/common/Button";
import { ExpandableList } from "@/common/ExpandableList";
import { Notification } from "@/common/Notification";
import { Recent } from "@/common/Recent";
import { Input } from "@/common/ui/input";
import { DashboardAppHeader } from "@/components/AppHeader";
import { Sidebar } from "@/components/SideBar";
import { Category, Tag } from "@/lib/constant";
import { Metadata } from "next";
import * as React from "react";

const metadata: Metadata = {
  title: "Dashboard | Bookmarker",
  description: "",
};

export const categoryLists: Category[] = [
  {
    id: 1,
    label: "Youtube",
    route: "/dashboard/videos/youtube",
    parent: { id: 4 },
  },
  {
    id: 2,
    label: "Twitter",
    route: "/dashboard/videos/twitter",
    parent: { id: 4 },
  },
];

const tagLists: Tag[] = [
  {
    id: 111,
    label: "Twitter",
  },
  {
    id: 112,
    label: "YT",
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const renderFilterDialog = () => {
    return <div>Date</div>;
  };

  return (
    <main className="flex w-screen h-screen bg-subtle">
      {/* Sidebar */}
      <section>
        <Sidebar />
      </section>

      {/* Body */}
      <section className="w-full h-full bg-subtle">
        <div className="m-5 mx-8">
          <DashboardAppHeader />
        </div>

        <div className="mx-8">{children}</div>
      </section>

      <section className="overflow-y-auto">
        <aside className="w-[18rem] mr-10 m-5 ml-2 flex flex-col gap-3">
          <ExpandableList
            expanded
            title="Categories"
            singularTitle="Category"
            items={categoryLists}
          />
          <ExpandableList
            expanded
            title="Tags"
            singularTitle="Tag"
            items={tagLists}
          />
          <Notification />
          <Recent />
        </aside>
      </section>
    </main>
  );
}
