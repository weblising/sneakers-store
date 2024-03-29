// type CharTitleType =
//   | "provider-code"
//   | "vendor-code"
//   | "raek-code"
//   | "etm-code"
//   | "brand"
//   | "product-serie"
//   | "manufacturer-code";

type CharGroupNameType = "provider" | "standart" | "brand" | "manufacturer";

interface CharItemI {
  title: string;
  name: string;
  value: string;
}

export type CharItemListType = CharItemI[];

interface CharGroupI {
  group: CharGroupNameType;
  list: CharItemListType;
}

export type charListType = CharGroupI[];

interface StockAvailabilityI {
  stockId: number;
  stockName: string;
  quantity: number;
}

export type ProductTitleType = string;
export type ProductImageType = string;
export type ProductListImageType = ProductImageType[];
export type ProductDescriptionType = string;
export type BasePriceType = number;
export type DiscountType = number | undefined;
export type PackingCountType = number;
export type StockAvailabilityType = StockAvailabilityI[];
export type DeliveryDateType = string;

export type ProductType = {
  title: ProductTitleType;
  images: ProductListImageType;
  basePrice: BasePriceType;
  discount?: DiscountType;
  description?: ProductDescriptionType;
  charList?: charListType;
  packingCount: PackingCountType;
  stockAvailability: StockAvailabilityType;
  deliveryDate: DeliveryDateType;
};

export type isProductPackSelected = boolean;
