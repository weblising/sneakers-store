import { FC, ReactElement, useState, ChangeEventHandler } from "react";
import { searchStringState } from "@/store/store";
import { useRecoilState } from "recoil";
import "../../scss/components/input.scss";

const MainSearchInput: FC = (): ReactElement => {
  const [inputValue, setInputValue] = useRecoilState(searchStringState);

  const changeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value: string = e.target.value;

    if (!value.trim().length && !inputValue.length) {
      return;
    }
    if (
      value.length &&
      !value[value.length - 1].trim() &&
      !inputValue[inputValue.length - 1].trim()
    ) {
      return;
    }

    setInputValue(value);
  };

  return (
    <>
      <input
        type="text"
        className="main-search__input input "
        placeholder="Поиск на сайте"
        value={inputValue}
        onChange={changeHandler}
      />
    </>
  );
};

export default MainSearchInput;
