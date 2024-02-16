import { renderHomeIcon } from "@/assets/icons.svg";
import { MenuItem, menuItems } from "@/lib/constant";
import { LibraryBig, ListTodo, Play, Star } from "lucide-react";
import React from "react";
interface SideMenuProps {
  //Props
}

export const getIcons = (key: string) => {
  if (key.toLowerCase() === "home") return renderHomeIcon();
  else if (key.toLowerCase() === "favourite") return <Star />;
  else if (key.toLowerCase() === "videos") return <Play />;
  else if (key.toLowerCase() === "articles") return <LibraryBig />;
  else if (key.toLowerCase() === "unread") return <ListTodo />;
  return <div className="w-4 h-4 rounded-full bg-secondary"></div>;
};

const SideMenu: React.FC<SideMenuProps> = () => {
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
    <section className="w-full h-screen bg-primary">
      {/* Brand */}
      <div className="flex items-center justify-center h-12 text-xl text-primary-foreground bg-slate-800">
        {/* Brand Logo */}
        <div className="w-10 h-10">
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
        <div>Bookmarker</div>
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
        <div className="flex flex-col gap-1 mx-1 mt-2">
          {menuItems.map((item: MenuItem) => renderMenuItems(item))}
        </div>
      </div>
    </section>
  );
};

export default SideMenu;
