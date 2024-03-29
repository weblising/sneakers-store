import { FC, ReactElement } from "react";
import { charListType } from "@/types/Product";
import ProductFullCharsList from "./ProductFullCharsList";

type Props = {
  charGroupList: charListType;
};

const ProductFullChars: FC<Props> = ({ charGroupList }): ReactElement => {
  return (
    <>
      <h2 className="product-full__subtitle-sm">Характеристики</h2>
      <div className="field field_type_row">
        {charGroupList.map((charGroup) => {
          const { group, list } = charGroup;
          return (
            <div key={group} className="field__list field__list_gap_md">
              <ProductFullCharsList charItemList={list} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductFullChars;
