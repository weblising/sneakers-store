import { FC, ReactElement } from "react";
import { ButtonIcon, IconType } from "./ButtonIcon";
import Link from "next/link";
import './button.scss'

type Props = {
  link: string;
  customClassName?: string;
  icon: IconType;
  text?: string;
  clickHandler?: () => void;
};

const ButtonLink: FC<Props> = ({
  link,
  customClassName,
  icon,
  text,
  clickHandler,
}): ReactElement => {
  return (
    <Link
      href={link}
      className={customClassName ? `button ${customClassName}` : "button"}
    >
      {icon && <ButtonIcon src={icon.src} alt={icon.alt} />}
      {text && <span className="button__text">{text}</span>}
    </Link>
  );
};

export default ButtonLink;
