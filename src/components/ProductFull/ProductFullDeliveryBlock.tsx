import { FC, ReactElement } from "react";
import { DeliveryDateType, StockAvailabilityType } from "@/types/Product";

type Props = {
  deliveryDate: DeliveryDateType;
  stockAvailability: StockAvailabilityType;
};

const ProductFullDeliveryBlock: FC<Props> = ({
  deliveryDate,
  stockAvailability,
}): ReactElement => {
  return (
    <div className="product-full__delivery-block">
      <div className="field">
        <div className="field__list">
          <div className="field__item">
            <p className="field__title">{deliveryDate}</p>
            <p className="field__value">Доставка</p>
          </div>
          {stockAvailability.map((stockItem) => {
            const { stockId, stockName, quantity } = stockItem;
            return (
              <div key={stockId} className="field__item">
                <p className="field__title">{quantity} шт.</p>
                <p className="field__value">{stockName}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductFullDeliveryBlock;
