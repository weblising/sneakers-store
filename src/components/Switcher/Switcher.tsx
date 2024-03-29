import { FC, ReactElement } from "react";
import "./switcher.scss";

type SwitcherProps = {
  toggleHandler: (par: boolean) => void;
  isActive: boolean;
};

const Switcher: FC<SwitcherProps> = ({
  toggleHandler,
  isActive,
}): ReactElement => {
  return (
    <div
      className="switcher"
      onClick={() => {
        toggleHandler(!isActive);
      }}
    >
      <div
        className={`switcher__inner${
          isActive ? " switcher__inner_active" : ""
        }`}
      >
        <span
          className={`switcher__bar switcher__bar_pos_${
            isActive ? "right" : "left"
          }`}
        ></span>
      </div>
    </div>
  );
};
export default Switcher;
