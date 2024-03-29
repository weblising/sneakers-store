import { FC, ReactElement } from "react";
import { CharItemListType } from "@/types/Product";

type Props = {
  charItemList: CharItemListType;
};

const ProductFullCharsList: FC<Props> = ({ charItemList }): ReactElement => {
  return (
    <>
      {charItemList.map((charItem) => {
        const { title, name, value } = charItem;
        return (
          <div key={title} className="field__item">
            <p className="field__title">{value}</p>
            <p className="field__value">{name}</p>
          </div>
        );
      })}
    </>
  );
};

export default ProductFullCharsList;
