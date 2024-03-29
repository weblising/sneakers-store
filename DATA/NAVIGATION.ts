import { BreadcrumbsListType, MenuType } from "@/types/Navigation";

export const BREAD_CRUMBS: BreadcrumbsListType = [
  { id: 1, title: "Каталог", link: "#" },
  { id: 2, title: "Обувь", link: "#" },
  { id: 3, title: "Кроссовки", link: "#" },
  { id: 4, title: "Беговые", link: "#" },
];

export const CATEGORIES: MenuType = [
  {
    id: 1,
    title: "Женщинам",
    link: "#",
    childItems: [
      { id: 5, title: "Одежда", link: "#" },
      { id: 6, title: "Обувь", link: "#" },
      { id: 7, title: "Аксессуары", link: "#" },
      { id: 8, title: "Белье", link: "#" },
      { id: 9, title: "Bra fitting", link: "#" },
    ],
  },

  {
    id: 2,
    title: "Мужчинам",
    link: "#",
    childItems: [
      { id: 10, title: "Одежда", link: "#" },
      { id: 11, title: "Обувь", link: "#" },
      { id: 12, title: "Аксессуары", link: "#" },
      { id: 13, title: "Белье", link: "#" },      
    ],
  },
  {
    id: 3,
    title: "Детям",
    link: "#",
    childItems: [
      { id: 15, title: "Одежда", link: "#" },
      { id: 16, title: "Обувь", link: "#" },
      { id: 17, title: "Аксессуары", link: "#" },
      { id: 18, title: "Белье", link: "#" },
      { id: 19, title: "Игрушки", link: "#" },
      { id: 20, title: "Малыши", link: "#" },
    ],
  },
  {
    id: 4,
    title: "Виды спорта",
    link: "#",
    childItems: [
      { id: 21, title: "Велоспорт", link: "#" },
      { id: 22, title: "Туризм", link: "#" },
      { id: 23, title: "Тренажеры и фитнес", link: "#" },
      { id: 24, title: "Командные виды спорта", link: "#" },
      { id: 25, title: "Самокаты", link: "#" },
    ],
  },
];

export const MAIN_LEFT_MENU: MenuType = [
  {
    id: 1,
    title: "Мои заказы",
    link: "#",
  },
  {
    id: 2,
    title: "Сотрудники",
    link: "#",
  },

  {
    id: 3,
    title: "Шаблоны заказов",
    link: "#",
  },

  {
    id: 4,
    title: "Обращения",
    link: "#",
  },
];

export const MAIN_RIGHT_MENU: MenuType = [
  {
    id: 1,
    title: "Ваш менеджер",
    link: "#",
    icon: "message.svg",
    customClass: "button",
  },
  {
    id: 2,
    title: "Акции",
    link: "#",
    icon: "percents.svg",
    customClass: "active",
  },

  {
    id: 3,
    title: "Блог",
    link: "#",
    customClass: "active",
  },
];

export const FOOTER_MENU: MenuType = [
  {
    id: 1,
    title: "Вакансии",
    link: "#",
  },
  {
    id: 2,
    title: "Блог",
    link: "#",
  },

  {
    id: 3,
    title: "Акции",
    link: "#",
  },

  {
    id: 4,
    title: "Предложить идею",
    link: "#",
    customClass: "button",
  },
];

export const BOTTOM_MENU: MenuType = [
  {
    id: 1,
    title: "PDF презентация",
    link: "#",
    icon: "document.svg",
  },
  {
    id: 2,
    title: "Видеоинструкция",
    link: "#",
    icon: "camera.svg",
  },

  {
    id: 3,
    title: "FAQ",
    link: "#",
    icon: "alert-circle.svg",
  },

  {
    id: 4,
    title: "Мы на Youtube",
    link: "#",
    customClass: "active",
    icon: "play-fill.svg",
  },

  {
    id: 5,
    title: "Политика конфиденциальности",
    link: "#",
  },

  {
    id: 6,
    title: "Лицензионное соглашение",
    link: "#",
    customClass: "button",
  },
];
