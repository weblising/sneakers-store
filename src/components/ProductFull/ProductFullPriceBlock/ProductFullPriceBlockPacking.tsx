import { FC, ReactElement } from "react";
import { PackingCountType, isProductPackSelected } from "@/types/Product";
import { useRecoilState } from "recoil";
import {
  isProductPackSelectedState,
  addedProductCountState,
} from "@/store/store";
import Switcher from "@/components/Switcher/Switcher";


type Props = {
  packingCount: PackingCountType;
};

const ProductFullPriceBlockPacking: FC<Props> = ({
  packingCount,
}): ReactElement => {
  const [isProductPackSelected, setProductPackSelected] = useRecoilState(
    isProductPackSelectedState
  );

  const [addedProductCount, setAddedProductCount] = useRecoilState(
    addedProductCountState
  );
  const toggleProductPackSelectedState = (
    isPackSelected: isProductPackSelected
  ): void => {
    setProductPackSelected(isPackSelected);

    addedProductCount && // if user already has added current product in cart
      setAddedProductCount(isPackSelected ? packingCount : 1);
  };

  return (
    <div className="row align-center">
      <div className="col-auto">
        <span className="product-full__packing-count">{`${packingCount} штук в уп.`}</span>
      </div>
      <div className="col-auto">
        <div className="row align-center">
          <div className="col-auto">
            <Switcher
              toggleHandler={toggleProductPackSelectedState}
              isActive={isProductPackSelected}
            />
          </div>
          <div className="col-auto">
            <span
              className="product-full__packing-text"
              onClick={() =>
                toggleProductPackSelectedState(!isProductPackSelected)
              }
            >
              Заказ упаковкой
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFullPriceBlockPacking;
