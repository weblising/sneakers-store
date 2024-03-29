import { FC, ReactElement } from "react";
import { MenuType } from "@/types/Navigation";
import Link from "next/link";
import Image from "next/image";
import "./menu.scss";

type Props = {
  menuList: MenuType;
  menuClass?: string;
};

const DefaultMenu: FC<Props> = ({ menuList, menuClass }): ReactElement => {
  const baseClass = menuClass ? menuClass : "menu";
  return (
    <ul className={`${baseClass} nav`}>
      {menuList.map((item) => {
        const { id, link, title, customClass, icon } = item;
        return (
          <li key={id} className={`${baseClass}__item`}>
            <Link
              href={link}
              className={`${baseClass}__link${
                customClass ? ` ${baseClass}__link_type_${customClass}` : ""
              }`}
            >
              {!!icon && (
                <Image
                  src={`/icons/${icon}`}
                  alt={title}
                  width={16}
                  height={16}
                />
              )}
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default DefaultMenu;
