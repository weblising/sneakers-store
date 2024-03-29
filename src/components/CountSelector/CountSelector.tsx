import { FC, ReactElement } from "react";
import getGenitiveCaseFromWord from "@/utils/getGenitiveCaseFromWord";
import Button from "@/components/Button/Button";
import "./count-selector.scss";

type Props = {
  clickHandler: (arg: number) => void;
  value: number;
};

const CountSelector: FC<Props> = ({ clickHandler, value }): ReactElement => {
  return (
    <div className="count-selector">
      <div className="count-selector__inner">
        <Button
          icon={{ src: "minus.svg", alt: "Убрать" }}
          customClassName="button_type_icon count-selector__btn count-selector__btn_pos_left"
          clickHandler={() => clickHandler(-1)}
        />
        <div className="count-selector__main">
          {`${value}  ${getGenitiveCaseFromWord(value, "штука", "first")}`}
        </div>
        <Button
          icon={{ src: "plus.svg", alt: "Добавить" }}
          customClassName="button_type_icon count-selector__btn count-selector__btn_pos_right"
          clickHandler={() => clickHandler(1)}
        />
      </div>
    </div>
  );
};

export default CountSelector;
