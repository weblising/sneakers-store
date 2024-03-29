import { FC, ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import "./copyrights.scss";

const Copyrights: FC = (): ReactElement => {
  return (
    <div className="copyrights">
      <Link
        href="https://hh.ru/resume/8698ffa4ff0b1c38fd0039ed1f4b6476487767"
        className="copyrights__link"
        target="_blank"
      >
        <Image
          src="/images/dev-logo.svg"
          width={123}
          height={24}
          alt="Разработка платформы"
        />
        <span className="copyrights__text">Разработка платформы</span>
      </Link>
    </div>
  );
};

export default Copyrights;
