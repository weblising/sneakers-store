import { FC, ReactElement } from "react";
import { ProductType } from "@/types/Product";
import PageHeader from "@/components/PageHeader/PageHeader";
import ProductFullImageBlock from "./ProductFullImageBlock";
import ProductFullContentTop from "./ProductFullContentTop";
import ProductFullContentBottom from "./ProductFullContentBottom";
import "./product-full.scss";

type Props = {
  product: ProductType;
};

const ProductFull: FC<Props> = ({ product }): ReactElement => {
  const { title, description, images } = product;
  return (
    <div className="product-full">
      <PageHeader title={title} />
      <div className="product-full__row">
        <div className="product-full__img-col">
          <ProductFullImageBlock title={title} images={images} />
        </div>
        <div className="product-full__content-col">
          <ProductFullContentTop product={product} />
          {description && <ProductFullContentBottom text={description} />}
        </div>
      </div>
    </div>
  );
};

export default ProductFull;
