import { FC, ReactElement } from "react";
import Logo from "@/components/Logo/Logo";
import MainSearch from "@/components/MainSearch/MainSearch";
import Button from "@/components/Button/Button";
import UserNav from "@/components/UserNav/UserNav";
import HeaderCart from "./HeaderCart";
import "./header.scss";

const Header: FC = (): ReactElement => {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="container-fluid container_pos_header">
          <div className="header__row">
            <div className="col-auto">
              <Logo width={144} height={28} />
            </div>
            <div className="col-auto">
              <Button
                icon={{ src: "list.svg", alt: "Категории" }}
                text="Меню"
              />
            </div>
            <div className="col">
              <MainSearch />
            </div>
            <div className="col-auto">
              <Button
                icon={{ src: "bell.svg", alt: "Уведомления", size: 32 }}
                customClassName="button_type_icon"
              />
            </div>
            <div className="col-auto header__separator">
              <span className="separator-vertical"></span>
            </div>
            <div className="col-auto">
              <Button
                icon={{
                  src: "heart-grey.svg",
                  alt: "Избранные товары",
                  size: 32,
                }}
                customClassName="button_type_icon"
              />
            </div>
            <div className="col-auto">
              <HeaderCart />
            </div>
            <div className="col-auto">
              <UserNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
