import { FC, ReactElement } from "react";
import Button from "@/components/Button/Button";

const ProductFullContentBottom: FC = (): ReactElement => {
  return (
    <Button
      customClassName="button_style_light button_size_lg"
      icon={{ src: "heart.svg", alt: "Добавить в избранное" }}
    />
  );
};

export default ProductFullContentBottom;
