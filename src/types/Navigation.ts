type ItemIdType = number;

interface NavItemI {
  id: ItemIdType;
  title: string;
  link: string;
  customClass?: string;
  icon?: string;
}

export type BreadcrumbsListType = NavItemI[];

interface MenuI extends NavItemI {
  childItems?: MenuType;
}

export type MenuType = MenuI[];
