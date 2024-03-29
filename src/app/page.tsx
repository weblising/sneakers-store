import { FC, ReactElement } from "react";
import type { Metadata } from "next";
import ProductFull from "@/components/ProductFull/ProductFull";
import PRODUCT from "../../DATA/PRODUCT";

export const metadata: Metadata = {
  title: "Sneakers shop",
  description: "The best shop of sneakers",
};

const ProductCardPage: FC = (): ReactElement => {
  return <ProductFull product={PRODUCT} />;
};

export default ProductCardPage;
