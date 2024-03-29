import { atom, selector } from "recoil";
import { BasePriceType, isProductPackSelected } from "@/types/Product";
import PRODUCT from "../../DATA/PRODUCT";

const { basePrice, discount } = PRODUCT;
const buyPrice = discount
  ? Math.round(basePrice * (1 - discount / 100) * 100) / 100
  : basePrice;

export const productBuyPriceState = atom<BasePriceType>({
  key: "productBuyPrice",
  default: buyPrice,
});

export const isProductPackSelectedState = atom<isProductPackSelected>({
  // if user select pack of products in ProductFull view
  key: "isProductPackSelected",
  default: false,
});

export const searchStringState = atom<string>({
  key: "searchString",
  default: "",
});

export const addedProductCountState = atom<number>({
  key: "addedProductCount",
  default: 0,
});

export const orderPriceState = selector<BasePriceType>({
  key: "orderPrice",
  get: ({ get }) => {
    const productCount = get(addedProductCountState);
    return Math.round(buyPrice * productCount * 100) / 100;
  },
});
