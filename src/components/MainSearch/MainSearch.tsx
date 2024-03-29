import { FC, ReactElement, FormEventHandler } from "react";
import MainSearchInput from "./MainSearchInput";
import Button from "../Button/Button";
import MainSearchClear from "./MainSearchClear";
import "./main-search.scss";

const MainSearch: FC = (): ReactElement => {
  const submitHandler: FormEventHandler<HTMLFormElement> = (e): void => {
    e.preventDefault();
  };
  return (
    <form className="main-search" onSubmit={submitHandler}>
      <MainSearchInput />
      <div className="main-search__btn-block">
        <div className="main-search__btn-col">
          <MainSearchClear />
        </div>
        <div className="main-search__btn-col">
          <Button
            type="submit"
            customClassName="button_type_icon"
            icon={{ src: "search.svg", alt: "Искать на сайте" }}
          />
        </div>
      </div>
    </form>
  );
};

export default MainSearch;
