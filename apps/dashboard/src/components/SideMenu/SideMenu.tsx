import { renderHomeIcon } from "@/assets/icons.svg";
import { MenuItem, getIcons, menuItems } from "@/lib/constant";
import { Avatar, AvatarFallback, AvatarImage } from "@/common/ui/avatar";

import { Button } from "@/common/Button";
import { api } from "@/lib/trpc";
import { Plus } from "lucide-react";
interface SideMenuProps {
  //Props
}

export type MenuItemsFromDB = {};
const SideMenu = async () => {
  const renderMenuItems = (item: MenuItem) => {
    const { id, label, route, subfolders } = item;
    return (
      <div
        className="flex items-center justify-start h-10 grid-cols-12 gap-4 px-1 mx-1 text-sm rounded cursor-pointer hover:bg-slate-700 text-secondary"
        key={id}
      >
        <div className="flex items-center justify-center w-10">
          {getIcons(label)}
        </div>
        <div className="">{label}</div>
      </div>
    );
  };

  return (
    <section className="flex flex-col justify-between w-full h-screen bg-primary">
      <div>
        {/* Brand */}
        <div className="flex items-center justify-center h-12 text-xl text-primary-foreground bg-slate-800">
          {/* Brand Logo */}
          <div className="w-8 h-8 xl:w-10 xl:h-10">
            <svg
              viewBox="0 0 1024 1024"
              className="w-full h-full icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M789.333333 917.333333l-277.333333-128-277.333333 128V192c0-46.933333 38.4-85.333333 85.333333-85.333333h384c46.933333 0 85.333333 38.4 85.333333 85.333333v725.333333z"
                fill="#F2F2F2"
              />
            </svg>
          </div>
          <div className="text-base xl:text-xl">Bookmarker</div>
        </div>

        {/* Menu Items */}
        <div className="overflow-hidden overflow-y-auto">
          {/* Default */}
          <div className="flex flex-col gap-1 mx-1 mt-2">
            {menuItems.map((item: MenuItem) => renderMenuItems(item))}
          </div>

          {/* Divider */}
          <div className="divider" />

          {/* User Created */}
          <div className="flex flex-col gap-1 mx-1 mt-2"></div>
        </div>
      </div>

      {/* Create Button */}
      <div className="flex items-center justify-center mb-2">
        <Button
          variant="secondary"
          size={"lg"}
          className="flex items-center justify-center gap-3 "
        >
          <Plus />
          <div>Create</div>
        </Button>
      </div>
    </section>
  );
};

export default SideMenu;
