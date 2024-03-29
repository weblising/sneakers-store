import { FC, ReactElement } from "react";
import Logo from "../Logo/Logo";
import Contacts from "../Contacts/Contacts";
import FooterMenu from "./FooterMenu/FooterMenu";

const FooterTop: FC = (): ReactElement => {
  return (
    <div className="footer__top-row">
      <div className="col-auto">
        <div className="footer__top-left-row">
          <div className="col-auto">
            <Logo width={206} height={40} />
          </div>
          <div className="col-auto">
            <Contacts />
          </div>
        </div>
      </div>
      <div className="col-auto">
        <FooterMenu />
      </div>
    </div>
  );
};

export default FooterTop;
