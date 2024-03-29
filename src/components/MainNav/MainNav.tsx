import { FC, ReactElement } from "react";
import DefaultMenu from "@/components/Menu/DefaultMenu/DefaultMenu";
import { MAIN_RIGHT_MENU, MAIN_LEFT_MENU } from "../../../DATA/NAVIGATION";
import "./main-nav.scss";

const MainNav: FC = (): ReactElement => {
  return (
    <nav className="main-nav">
      <div className="container-fluid container_pos_main-nav">
        <div className="main-nav__row">
          <div className="col">
            <DefaultMenu menuList={MAIN_LEFT_MENU} />
          </div>
          <div className="col-auto">
            <DefaultMenu menuList={MAIN_RIGHT_MENU} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
