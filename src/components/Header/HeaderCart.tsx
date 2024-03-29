import { FC, ReactElement } from "react";
import { useRecoilValue } from "recoil";
import { orderPriceState } from "@/store/store";
import formateNumber from "@/utils/formateNumber";
import Button from "@/components/Button/Button";

const HeaderCart: FC = (): ReactElement => {
  const orderPrice = useRecoilValue(orderPriceState);

  return (
    <Button
      icon={{ src: "cart.svg", alt: "Корзина" }}
      customClassName="button_style_light-blue button_pos_cart"
      text={`${formateNumber(orderPrice)}₽`}
    />
  );
};

export default HeaderCart;
