import { FC, ReactElement } from "react";
import { ButtonIcon, IconType } from "./ButtonIcon";

type ButtonTypeI = "button" | "submit" | "reset";

type Props = {
  customClassName?: string;
  type?: ButtonTypeI;
  icon?: IconType;
  text?: string;
  clickHandler?: () => void;
};

const Button: FC<Props> = ({
  customClassName,
  type,
  icon,
  text,
  clickHandler,
}): ReactElement => {
  return (
    <button
      type={type ? type : "button"}
      className={customClassName ? `button ${customClassName}` : "button"}
      onClick={clickHandler}
    >
      {icon && <ButtonIcon src={icon.src} alt={icon.alt} size={icon.size} />}
      {text && <span className="button__text">{text}</span>}
    </button>
  );
};

export default Button;
