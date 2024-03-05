"use client";
import { Button } from "@/common/Button";
import { CommandMenu } from "@/common/Search";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/common/ui/command";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/common/ui/dropdown-menu";
import { menuItems, userDetails } from "@/lib/constant";
import { cn } from "@/lib/utils";
import {
  BellDot,
  Bookmark,
  ChevronsLeft,
  ChevronsRight,
  ChevronsUpDown,
  Heart,
  LogOut,
  PlusCircle,
  Settings,
  User,
} from "lucide-react";
import Link from "next/link";
import * as React from "react";
import UserDetails from "../UserDetails/UserDetails";

interface SidebarProps {
  // Props
}

export const Sidebar: React.FC<SidebarProps> = () => {
  const [sideMenuShrink, setSideMenuShrink] = React.useState<boolean>(false);
  const [isMouseInRange, setIsMouseInRange] = React.useState<boolean>(false);
  const [isMouseOverSidebar, setIsMouseOverSidebar] =
    React.useState<boolean>(false);

  // Side Effects
  React.useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const mouseX = event.clientX;
      if (mouseX >= 0 && mouseX <= 150) {
        setIsMouseInRange(true);
      } else {
        setIsMouseInRange(false);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMouseOverSidebar]);

  return (
    <>
      {sideMenuShrink && (
        <div
          className={cn(
            "absolute left-1 top-1 p-1 border border-subtle rounded cursor-pointer"
          )}
          onClick={() => {
            setSideMenuShrink(!sideMenuShrink);
          }}
        >
          <ChevronsRight className="text-subtle" />
        </div>
      )}
      <aside
        className={cn("group relative")}
        onMouseEnter={() => setIsMouseOverSidebar(true)}
        onMouseLeave={() => setIsMouseOverSidebar(false)}
      >
        <nav
          className={cn(
            "flex flex-col shadow-sm bg-subtle dark:bg-primary-foreground",
            {
              "fixed -left-full": sideMenuShrink,
              "min-w-[13rem] h-screen": !sideMenuShrink,
              "left-0 top-[6%] rounded min-w-[13rem] h-[80%] overflow-y-auto":
                (sideMenuShrink && isMouseOverSidebar) ||
                (sideMenuShrink && isMouseInRange),
            }
          )}
          onMouseEnter={() => setIsMouseOverSidebar(true)}
        >
          {/* Banner */}
          <div className="relative flex items-center justify-between h-12 px-2">
            <div className="flex items-center">
              <div className="flex items-center ">
                <Bookmark className="w-8 h-8 p-[0.2rem] mr-1 rounded cursor-pointer fill-white" />
                <span className="text-lg font-bold capitalize">Bookmarker</span>
              </div>
            </div>

            {/* Only Shows when hover */}
            {!sideMenuShrink && (
              <Button
                className="hidden group-hover:block"
                variant={"outline"}
                size={"icon"}
                onClick={() => {
                  setSideMenuShrink(!sideMenuShrink);
                }}
              >
                <ChevronsLeft className="text-subtle" />
              </Button>
            )}
          </div>

          {/* SideBar Items */}
          <div className="flex-1">
            <Command>
              <CommandList className="overflow-hidden">
                {/* Default */}
                <CommandGroup>
                  <CommandItem>
                    <CommandMenu />
                  </CommandItem>
                  {menuItems.map((item) => (
                    <Link key={item.id} href={item.route}>
                      <CommandItem className={cn("cursor-pointer")}>
                        <span>{item.icon(cn("w-4 h-4 mr-3"))}</span>
                        <span>{item.label}</span>
                      </CommandItem>
                    </Link>
                  ))}
                  <CommandItem className="cursor-pointer text-subtle">
                    <PlusCircle className="w-4 h-4 mr-3" />
                    <span>New Folder</span>
                  </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup>
                  {/* TODO: This folders will comes form DB */}
                </CommandGroup>
              </CommandList>
            </Command>
          </div>

          {/* Sidebar Botton Section */}
          {!sideMenuShrink && (
            <div className="flex items-center justify-between p-2">
              <DropdownMenu>
                <DropdownMenuTrigger
                  asChild
                  className="flex items-center justify-center outline-none"
                >
                  <section className="flex items-center justify-between w-full">
                    <UserDetails />
                    <Button className="w-4 h-4 p-0 ml-1" variant={"ghost"}>
                      <ChevronsUpDown className="text-slate-400" />
                    </Button>
                  </section>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-full">
                  <DropdownMenuLabel className="text-xs dark:text-slate-400">
                    {userDetails.email}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="w-4 h-4 mr-2" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <BellDot className="w-4 h-4 mr-2" />
                    <span>Notifications</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="w-4 h-4 mr-2" />
                    <span>Setting</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Heart className="w-4 h-4 mr-2 text-pink-500" />
                    <span>Support</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <LogOut className="w-4 h-4 mr-2" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
        </nav>
      </aside>
    </>
  );
};
