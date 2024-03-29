import { FC, ReactElement } from "react";
import { ProductTitleType, ProductListImageType } from "@/types/Product";
import Image from "next/image";
import Button from "@/components/Button/Button";

type Props = {
  title: ProductTitleType;
  images: ProductListImageType;
};

const ProductFullImageBlock: FC<Props> = ({ title, images }): ReactElement => {
  return (
    <>
      <div className="product-full__img-wrap">
        <div className="product-full__main-img">
          <Image
            src={`${process.env.productImageDirPath}/product_1/${images[0]}_lg.png`}
            width={400}
            height={400}
            alt={`${title} фото 1`}
          />
        </div>
      </div>
      <div className="product-full__img-carousel">
        <div className="col-auto">
          <Button
            icon={{
              src: "chevron-left.svg",
              alt: "Предыдущее изображение",
              size: 32,
            }}
            customClassName="button_style_light-blue button_pos_car-nav"
          />
        </div>

        <div className="product-full__img-carousel-inner col">
          <div className="product-full__img-carousel-items">
            {images.map((image, index): ReactElement => {
              return (
                <div key={image} className="product-full__img-carousel-item">
                  <Image
                    src={`${process.env.productImageDirPath}/product_1/${image}_sm.png`}
                    width={64}
                    height={64}
                    alt={`${title} фото ${index + 1}`}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-auto">
          <Button
            icon={{
              src: "chevron-right.svg",
              alt: "Следующее изображение",
              size: 32,
            }}
            customClassName="button_style_light-blue button_pos_car-nav"
          />
        </div>
      </div>
    </>
  );
};

export default ProductFullImageBlock;
