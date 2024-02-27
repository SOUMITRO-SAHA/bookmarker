import { renderHomeIcon } from "@/assets/icons.svg";
import { LibraryBig, ListTodo, Play, Plus, Star } from "lucide-react";

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
