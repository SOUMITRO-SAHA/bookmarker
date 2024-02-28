"use client";
import { Button } from "@/common/Button";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/common/ui/command";
import { cn } from "@/lib/utils";
import {
  Bookmark,
  ChevronsLeft,
  ChevronsRight,
  LibraryBig,
  ListTodo,
  Play,
  PlusCircle,
  Search,
  Star,
} from "lucide-react";
import * as React from "react";

interface SidebarProps {
  // Props
}

const Sidebar: React.FC<SidebarProps> = () => {
  const [sideMenuShrink, setSideMenuShrink] = React.useState<boolean>(false);
  const [isMouseInRange, setIsMouseInRange] = React.useState<boolean>(false);

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
  }, []);

  return (
    <>
      {sideMenuShrink && (
        <div
          className={cn(
            "absolute left-1 top-1 p-1 border border-subtle rounded cursor-pointer"
          )}
          onClick={() => setSideMenuShrink(!sideMenuShrink)}
        >
          <ChevronsRight className="text-subtle" />
        </div>
      )}
      <aside className={cn("group relative")}>
        <nav
          className={cn(
            "flex flex-col shadow-sm bg-subtle dark:bg-primary-foreground",
            sideMenuShrink ? "fixed -left-full" : "min-w-[13rem] h-screen",
            sideMenuShrink &&
              isMouseInRange &&
              "left-0 top-[6%] rounded min-w-[13rem] h-[80%] overflow-y-auto"
          )}
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
                onClick={() => setSideMenuShrink(!sideMenuShrink)}
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
                    <Search className="w-4 h-4 mr-2" />
                    <span>Search</span>
                  </CommandItem>
                  <CommandItem>
                    <Star className="w-4 h-4 mr-2" />
                    <span>Favourite</span>
                  </CommandItem>
                  <CommandItem>
                    <Play className="w-4 h-4 mr-2" />
                    <span>Videos</span>
                  </CommandItem>
                  <CommandItem>
                    <LibraryBig className="w-4 h-4 mr-2" />
                    <span>Articles</span>
                  </CommandItem>
                  <CommandItem>
                    <ListTodo className="w-4 h-4 mr-2" />
                    <span>Unread</span>
                  </CommandItem>
                  <CommandItem>
                    <PlusCircle className="w-4 h-4 mr-2" />
                    <span>New Space</span>
                  </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                {/* User Created */}
                <CommandGroup className="overflow-hidden overflow-y-auto">
                  <CommandItem>Profile</CommandItem>
                  <CommandItem>Billing</CommandItem>
                  <CommandItem>Settings</CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
