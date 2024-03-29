import { FC, ReactElement } from "react";
import Link from "next/link";
import Image from "next/image";

import './logo.scss';

type Props = {
  width:number;
  height:number;
}

const Logo: FC<Props> = ({width , height}): ReactElement => {
  return (
    <Link href="/" className="logo">
      <Image
        src="/images/logo.svg"
        width={width}
        height={height}
        alt="Sneacker Shop"
      />
    </Link>
  );
};

export default Logo;
