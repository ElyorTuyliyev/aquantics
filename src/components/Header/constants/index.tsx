import { ROUTES_PATH } from "@/src/config/routes";

const { CONTACT, PRODUCT, TOURS } = ROUTES_PATH;

export const HeaderLink = [
  {
    name: "Главная",
    link: "/",
  },
  {
    name: "О клубе",
    link: "#",
  },
  {
    name: "Обучение",
    link: "#",
  },
  {
    name: "Снаряжение",
    link: "#",
  },
  {
    name: "Туры",
    link: TOURS,
  },
  {
    name: "Акции",
    link: "#",
  },
  {
    name: "Отзывы",
    link: PRODUCT,
  },
  {
    name: "Контакты",
    link: CONTACT,
  },
];
