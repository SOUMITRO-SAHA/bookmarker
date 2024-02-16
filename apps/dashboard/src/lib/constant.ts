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
