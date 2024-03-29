import { FC, ReactElement } from "react";
import { FOOTER_MENU } from "../../../../DATA/NAVIGATION";
import DefaultMenu from "../../Menu/DefaultMenu/DefaultMenu";

import "./footer-menu.scss";
const FooterMenu: FC = (): ReactElement => {
  return <DefaultMenu menuList={FOOTER_MENU} menuClass="footer-menu" />;
};

export default FooterMenu;
