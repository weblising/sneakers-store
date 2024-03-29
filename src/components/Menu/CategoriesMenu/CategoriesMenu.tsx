import { FC, ReactElement } from "react";
import { MenuType } from "@/types/Navigation";
import Link from "next/link";
import "./cat-menu.scss";

type Props = {
  menu: MenuType;
  isParent: boolean;
};

const CategoriesMenu: FC<Props> = ({ menu, isParent }): ReactElement => {
  return (
    <ul className={`cat-menu nav${isParent ? " cat-menu_type_parent" : ""}`}>
      {menu.map((item): ReactElement => {
        const { id, title, link, childItems } = item;
        return (
          <li
            key={id}
            className={`cat-menu__item${
              isParent ? " cat-menu__item_type_parent col" : ""
            }`}
          >
            <Link
              href={link}
              className={`cat-menu__link${
                isParent ? " cat-menu__link_type_parent" : ""
              }`}
            >
              {title}
            </Link>
            {childItems && (
              <CategoriesMenu menu={childItems} isParent={false} />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default CategoriesMenu;
