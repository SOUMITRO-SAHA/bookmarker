import { renderHomeIcon } from "@/assets/icons.svg";
import {
  ArrowDownToLine,
  ArrowUpCircle,
  ArrowUpRightSquare,
  BellDot,
  CircleUserRound,
  LibraryBig,
  ListTodo,
  Play,
  Plus,
  Settings,
  SlidersHorizontal,
  Star,
} from "lucide-react";
import { cn } from "./utils";

export const userDetails = {
  username: "Soumitra Saha",
  email: "soumitrosahaofficial@gmail.com",
  membership: "FREE",
  lastOnline: "2 hours ago",
  imageURL: "",
};

export type MenuItem = {
  id: number;
  label: string;
  route: string;
  subfolders: Category[] | null;
};

export type Category = {
  id: number | string;
  label: string;
  route: string;
  parent: {
    id: number | string;
  };
};

export const menuItems: MenuItem[] = [
  {
    id: 1,
    label: "Home",
    route: "/",
    subfolders: null,
  },
  { id: 3, label: "Favourite", route: "/favourite", subfolders: null },
  {
    id: 4,
    label: "Videos",
    route: "/videos",
    subfolders: [
      {
        id: 41,
        label: "Youtube",
        route: "/videos/youtube",
        parent: { id: 4 },
      },
    ],
  },
  {
    id: 5,
    label: "Articles",
    route: "/articles",
    subfolders: [
      {
        id: 51,
        label: "Business",
        route: "/articles/business",
        parent: { id: 5 },
      },
    ],
  },
  { id: 6, label: "Unread", route: "/unread", subfolders: null },
];

export type Group = "Accounts" | "Workspaces";

export type SettingsMenuItem = {
  id: number;
  label: string;
  route: string;
  icon: (className: string) => React.ReactNode;
};

export type SettingsMenuGroup = {
  key: Group;
  items: SettingsMenuItem[];
};
export const settingsMenuItems: Record<Group, SettingsMenuItem[]> = {
  Accounts: [
    {
      id: 1,
      label: "My Account",
      route: "/settings/accounts",

      icon: (className: string) => (
        <CircleUserRound className={cn(className)} />
      ),
    },
    {
      id: 2,
      label: "My Settings",
      route: "/settings/my-settings",

      icon: (className: string) => (
        <SlidersHorizontal className={cn(className)} />
      ),
    },
    {
      id: 3,
      label: "My Notification",
      route: "/settings/my-notification",

      icon: (className: string) => <BellDot className={cn(className)} />,
    },
    {
      id: 4,
      label: "My Connections",
      route: "/settings/my-connections",

      icon: (className: string) => (
        <ArrowUpRightSquare className={cn(className)} />
      ),
    },
  ],
  Workspaces: [
    {
      id: 5,
      label: "Settings",
      route: "/settings",
      icon: (className: string) => <Settings className={cn(className)} />,
    },
    {
      id: 6,
      label: "Upgrade",
      route: "/settings/upgrade",
      icon: (className: string) => <ArrowUpCircle className={cn(className)} />,
    },
    {
      id: 7,
      label: "Imports",
      route: "/settings/imports",
      icon: (className: string) => (
        <ArrowDownToLine className={cn(className)} />
      ),
    },
  ],
};

export const getIcons = (key: string) => {
  const lowerCaseKey = key.toLowerCase();
  switch (lowerCaseKey) {
    case "home":
      return renderHomeIcon();
    case "favourite":
      return <Star />;
    case "videos":
      return <Play />;
    case "articles":
      return <LibraryBig />;
    case "unread":
      return <ListTodo />;
    default:
      return <div className="w-4 h-4 rounded-full bg-secondary"></div>;
  }
};
