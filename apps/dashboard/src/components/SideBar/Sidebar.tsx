import { Button } from "@/common/Button";
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
import { userDetails } from "@/lib/constant";
import {
  BellDot,
  ChevronsLeft,
  ChevronsUpDown,
  Heart,
  LibraryBig,
  ListTodo,
  LogOut,
  Play,
  PlusCircle,
  Search,
  Settings,
  Star,
  User,
} from "lucide-react";
import * as React from "react";
import { ModeToggle } from "../Theme/ModeToggle";
import UserDetails from "../UserDetails/UserDetails";
import BrandIcon from "./BrandIcon";

interface SidebarProps {
  // Props
}

const Sidebar: React.FC<SidebarProps> = () => {
  const renderBrandIcon = () => {
    return <BrandIcon />;
  };
  return (
    <aside className="h-screen">
      <nav className="flex flex-col h-full shadow-sm bg-secondary dark:bg-primary-foreground">
        <div className="flex items-center justify-between h-12 px-3">
          <div className="flex items-center ">
            {/* Logo */}
            <div className="w-8 h-8 p-1 mr-2 rounded cursor-pointer dark:bg-slate-700 dark:hover:bg-slate-700/80">
              {renderBrandIcon()}
            </div>

            {/* User Name */}
            <div className="uppercase dark:text-slate-200">
              {userDetails.username}
            </div>

            {/* Settings Button */}
            <DropdownMenu>
              <DropdownMenuTrigger
                asChild
                className="flex items-center justify-center outline-none"
              >
                <Button className="w-4 h-4 p-0 ml-1" variant={"ghost"}>
                  <ChevronsUpDown className="text-slate-400" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-full">
                <DropdownMenuLabel className="text-xs dark:text-slate-400">
                  {userDetails.email}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>
                  <UserDetails />
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

          {/* Only Shows when hover */}
          <Button size={"icon"} className="text-slate-400" variant={"ghost"}>
            <ChevronsLeft />
          </Button>
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

        {/* Buttom */}
        <div className="flex items-center h-12"></div>
      </nav>
    </aside>
  );
};

export default Sidebar;
