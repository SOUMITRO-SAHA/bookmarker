import { renderHomeIcon } from "@/assets/icons.svg";
import {
  Archive,
  ArrowDownToLine,
  ArrowUpCircle,
  ArrowUpRightSquare,
  BellDot,
  BookOpenText,
  CircleUserRound,
  LibraryBig,
  ListTodo,
  MessageSquareText,
  Play,
  Plus,
  Settings,
  SlidersHorizontal,
  Star,
} from "lucide-react";
import { cn } from "./utils";

export const BrandTitle = "Bookmarker";
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
  icon: (className: string) => React.ReactNode;
};

export type Category = {
  id: number | string;
  label: string;
  route: string;
  parent: {
    id: number | string;
  };
};

export type Tag = {
  id: number | string;
  label: string;
};

export const menuItems: MenuItem[] = [
  {
    id: 1,
    label: "Favourite",
    route: "/dashboard/favourite",
    subfolders: null,
    icon: (className: string) => <Star className={cn(className)} />,
  },
  {
    id: 2,
    label: "Archive",
    route: "/dashboard/archive",
    subfolders: null,
    icon: (className: string) => <Archive className={cn(className)} />,
  },
  {
    id: 3,
    label: "Videos",
    route: "/dashboard/videos",
    icon: (className: string) => <Play className={cn(className)} />,
    subfolders: [
      {
        id: 41,
        label: "Youtube",
        route: "/dashboard/videos/youtube",
        parent: { id: 4 },
      },
    ],
  },
  {
    id: 4,
    label: "Articles",
    route: "/dashboard/articles",
    icon: (className: string) => <LibraryBig className={cn(className)} />,
    subfolders: [
      {
        id: 51,
        label: "Business",
        route: "/dashboard/articles/business",
        parent: { id: 5 },
      },
    ],
  },
  {
    id: 5,
    label: "Notes",
    route: "/dashboard/notes",
    icon: (className: string) => <BookOpenText className={cn(className)} />,
    subfolders: null,
  },
  {
    id: 6,
    label: "Posts",
    route: "/dashboard/posts",
    icon: (className: string) => (
      <MessageSquareText className={cn(className)} />
    ),
    subfolders: null,
  },
  {
    id: 7,
    label: "Unread",
    route: "/dashboard/unread",
    icon: (className: string) => <ListTodo className={cn(className)} />,
    subfolders: null,
  },
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
