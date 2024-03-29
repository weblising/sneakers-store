import { FC, ReactElement } from "react";
import Button from "../Button/Button";
import { useRecoilState } from "recoil";
import { searchStringState } from "@/store/store";

const MainSearchClear: FC = (): ReactElement => {
  const [searchString, setSearchString] = useRecoilState(searchStringState);

  const clickHandler = () => {
    setSearchString("");
  };

  return (
    <>
      {!!searchString.length && (
        <Button
          clickHandler={clickHandler}
          customClassName="button_type_icon"
          icon={{ src: "times.svg", alt: "Очиcтить поиск" }}
        />
      )}
    </>
  );
};

export default MainSearchClear;
