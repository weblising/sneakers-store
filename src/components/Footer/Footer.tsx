import { FC, ReactElement } from "react";
import FooterTop from "@/components/Footer/FooterTop";
import FooterMiddle from "@/components/Footer/FooterMiddle";
import FooterBottom from "./FooterBottom/FooterBottom";
import "./footer.scss";

const Footer: FC = (): ReactElement => {
  return (
    <footer className="footer">
      <div className="container container_pos_footer">
        <span className="separator-horizontal"></span>
        <FooterTop />
        <span className="separator-horizontal"></span>
        <FooterMiddle />
        <span className="separator-horizontal"></span>
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
