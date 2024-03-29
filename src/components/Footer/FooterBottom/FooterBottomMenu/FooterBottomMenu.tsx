import { FC, ReactElement } from "react";
import { BOTTOM_MENU } from "../../../../../DATA/NAVIGATION";
import DefaultMenu from "@/components/Menu/DefaultMenu/DefaultMenu";

import "./bottom-menu.scss";
const FooterBottomMenu: FC = (): ReactElement => {
  return (
    <DefaultMenu menuList={BOTTOM_MENU} menuClass="bottom-menu" />
  );
};

export default FooterBottomMenu;
