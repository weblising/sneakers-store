import { FC, ReactElement } from "react";
import { ProductType } from "@/types/Product";
import ProductFullChars from "./ProductFullChars/ProductFullChars";
import ProductFullPriceBlock from "./ProductFullPriceBlock/ProductFullPriceBlock";
import ProductFullDeliveryBlock from "./ProductFullDeliveryBlock";
import ProductFullAddToCart from "./ProductFullAddToCart";
import ProductFullToggleFavorite from "./ProductFullToggleFavorite";

type Props = {
  product: ProductType;
};

const ProductFullContentTop: FC<Props> = ({ product }): ReactElement => {
  const {
    charList,
    basePrice,
    discount,
    packingCount,
    deliveryDate,
    stockAvailability,
  } = product;

  return (
    <div className="product-full__content-row">
      <div className="product-full__main-col">
        <ProductFullPriceBlock
          basePrice={basePrice}
          discount={discount}
          packingCount={packingCount}
        />
        <ProductFullDeliveryBlock
          deliveryDate={deliveryDate}
          stockAvailability={stockAvailability}
        />
        <div className="product-full__cart-block">
          <div className="col">
            <ProductFullAddToCart packingCount={packingCount} />
          </div>
          <div className="col-auto">
            <ProductFullToggleFavorite />
          </div>
        </div>
      </div>
      <span className="separator-vertical"></span>
      {!!charList?.length && (
        <div className="col">
          <ProductFullChars charGroupList={charList} />
        </div>
      )}
    </div>
  );
};

export default ProductFullContentTop;
