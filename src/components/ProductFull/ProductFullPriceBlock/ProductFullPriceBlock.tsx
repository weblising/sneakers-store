"use client";
import { FC, ReactElement } from "react";
import { BasePriceType, DiscountType, PackingCountType } from "@/types/Product";
import { useRecoilState } from "recoil";
import { productBuyPriceState } from "@/store/store";
import formateNumber from "@/utils/formateNumber";
import ProductFullPriceBlockPacking from "./ProductFullPriceBlockPacking";


type Props = {
  basePrice: BasePriceType;
  discount: DiscountType;
  packingCount: PackingCountType;
};

const ProductFullPriceBlock: FC<Props> = ({
  basePrice,
  discount,
  packingCount,
}): ReactElement => {
  const [productBuyPrice, setProductBuyPrice] =
    useRecoilState(productBuyPriceState);

  return (
    <div className="product-full__price-block">
      <div className="product-full__price-block-top">
        {!!discount && (
          <span className="text-attention text-sm">{`${formateNumber(
            basePrice
          )} цена без скидки`}</span>
        )}
        <div className="product-full__price-block-row">
          <div className="col-auto">
            <span className="product-full__price">{`${formateNumber(
              productBuyPrice
            )} ₽`}</span>
          </div>
          {!!discount && (
            <div className="col-auto">
              <span className="tag">{`-${discount}%`}</span>
            </div>
          )}
        </div>
      </div>
      {!!packingCount && (
        <ProductFullPriceBlockPacking packingCount={packingCount} />
      )}
    </div>
  );
};

export default ProductFullPriceBlock;
