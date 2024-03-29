"use client";
import { FC, ReactElement, useState, MouseEventHandler } from "react";
import Image from "next/image";
import USER from "../../../DATA/USER";
const { name, avatar } = USER;
import "./user-nav.scss";

const UserNav: FC = (): ReactElement => {
  const [isShowMenu, setShowMenu] = useState<boolean>(false);

  const clickHandler: MouseEventHandler<HTMLDivElement> = () =>
    setShowMenu(!isShowMenu);

  return (
    <div className="user-nav">
      <div className="user-nav__inner">
        <div className="user-nav__panel" onClick={clickHandler}>
          <div className="user-nav__info">
            <Image
              src={`/images/${avatar?.length ? `demo/${avatar}` : "man.png"}`}
              width={32}
              height={32}
              alt={name}
              className="user-nav__img"
            />
            <span className="user-nav__title">{name}</span>
          </div>
          <Image
            src="/icons/chevron-down.svg"
            width={24}
            height={24}
            alt="Переключатель"
            className={`user-nav__toggler${
              isShowMenu ? " user-nav__toggler_active" : ""
            }`}
          />
        </div>
        <div
          className={`user-nav__dropdown${
            isShowMenu ? " user-nav__dropdown_active" : ""
          }`}
        ></div>
      </div>
    </div>
  );
};

export default UserNav;
