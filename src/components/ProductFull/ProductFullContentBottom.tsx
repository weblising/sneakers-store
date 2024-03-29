import { FC, ReactElement } from "react";
import { ProductDescriptionType } from "@/types/Product";

type Props = {
  text: ProductDescriptionType;
};

const ProductFullContentBottom: FC<Props> = ({ text }): ReactElement => {
  return (
    <div className="product-full__description">
      <h2 className="product-full__subtitle">Описание товара</h2>
      <p>{text}</p>
    </div>
  );
};

export default ProductFullContentBottom;
