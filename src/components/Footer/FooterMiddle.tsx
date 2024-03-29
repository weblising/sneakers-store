import { FC, ReactElement } from "react";
import CategoriesMenu from "../Menu/CategoriesMenu/CategoriesMenu";
import { CATEGORIES } from "../../../DATA/NAVIGATION";

const FooterMiddle: FC = (): ReactElement => {
  return (
    <nav className="footer__nav">
      <CategoriesMenu menu={CATEGORIES} isParent={true} />
    </nav>
  );
};

export default FooterMiddle;
