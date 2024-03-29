import { FC, ReactElement } from "react";
import FooterBottomMenu from "./FooterBottomMenu/FooterBottomMenu";
import Copyrights from "../Copyrights/Copyrights";
import { DISCLAIMER_TEXT } from "../../../../DATA/CUSTOM_TEXT";

const FooterBottom: FC = (): ReactElement => {
  return (
    <div className="footer__bottom">
      <FooterBottomMenu />
      <p className="footer__disclaimer">{DISCLAIMER_TEXT}</p>
      <Copyrights />
    </div>
  );
};

export default FooterBottom;
