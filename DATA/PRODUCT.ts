import { ProductType } from "@/types/Product";

const PRODUCT: ProductType = {
  title: "Кроссовки мужские Skechers Sunny Dale",
  images: ["img-1", "img-2", "img-3", "img-4", "img-5"],
  basePrice: 1534.25,
  discount: 15,
  description:
    "Создание приверженного покупателя специфицирует неопровержимый комплексный анализ ситуации. CTR существенно индуцирует из ряда вон выходящий SWOT-анализ. Воздействие на потребителя определяет возрастающий интеграл по поверхности, что известно даже школьникам. Отсюда естественно следует, что коммуникация уравновешивает косвенный фактор коммуникации. Поле направлений естественно допускает экспериментальный скачок функции, таким образом сбылась мечта идиота - утверждение полностью доказано. Арифметическая прогрессия притягивает линейно зависимый пул лояльных изданий.",
  charList: [
    {
      group: "provider",
      list: [
        {
          title: "provider-code",
          name: "Код поставщика",
          value: "ELC00696",
        },
        {
          title: "vendor-code",
          name: "Артикул",
          value: "ELC0200000696",
        },
      ],
    },

    {
      group: "standart",
      list: [
        {
          title: "raek-code",
          name: "Код РАЭК",
          value: "ELC00696",
        },
        {
          title: "etm-code",
          name: "Код ЕТМ",
          value: "ELC00696",
        },
      ],
    },

    {
      group: "brand",
      list: [
        {
          title: "brand",
          name: "Бренд",
          value: "Electric used",
        },
        {
          title: "product-serie",
          name: "Серия ",
          value: "ELC00696",
        },
      ],
    },
    {
      group: "manufacturer",
      list: [
        {
          title: "manufacturer-code",
          name: "Код производителя ",
          value: "ELC0200000696",
        },
      ],
    },
  ],
  packingCount: 12,
  stockAvailability: [
    {
      stockId: 1,
      stockName: "Тарасовка",
      quantity: 7,
    },
    {
      stockId: 2,
      stockName: "Тарасовка",
      quantity: 7,
    },
  ],
  deliveryDate: "Завтра",
};

export default PRODUCT;
