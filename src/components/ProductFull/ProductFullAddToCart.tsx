"use client";
import { FC, ReactElement } from "react";
import { PackingCountType } from "@/types/Product";
import { useRecoilState } from "recoil";
import {
  addedProductCountState,
  isProductPackSelectedState,
} from "@/store/store";
import Button from "@/components/Button/Button";
import CountSelector from "@/components/CountSelector/CountSelector";

type Props = {
  packingCount: PackingCountType;
};

const ProductFullAddToCart: FC<Props> = ({ packingCount }): ReactElement => {
  const [addedProductCount, setAddedProductCount] = useRecoilState(
    addedProductCountState
  );
  const [isProductPackSelected] = useRecoilState(isProductPackSelectedState);

  const clickHandler = (count: number): void => {
    if (isProductPackSelected && packingCount) {
      setAddedProductCount(addedProductCount + count * packingCount);
    } else {
      setAddedProductCount(addedProductCount + count);
    }
  };

  return (
    <>
      {addedProductCount ? (
        <CountSelector clickHandler={clickHandler} value={addedProductCount} />
      ) : (
        <Button
          customClassName="button_size_full"
          icon={{ src: "cart-white.svg", alt: "Добавить в корзину" }}
          text="В корзину"
          clickHandler={() => clickHandler(1)}
        />
      )}
    </>
  );
};

export default ProductFullAddToCart;
