import { FC, ReactElement } from "react";
import Image from "next/image";

export type IconType = {
  src: string;
  alt: string;
  size?: number;
};

export const ButtonIcon: FC<IconType> = ({ src, alt, size }): ReactElement => {
  return (
    <Image
      src={`/icons/${src}`}
      width={size ? size : 24}
      height={size ? size : 24}
      alt={alt}
    />
  );
};
