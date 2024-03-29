import { FC, ReactElement } from "react";
import Link from "next/link";

const Contacts: FC = (): ReactElement => {
  return (
    <div className="field">
      <div className="field__list field__list_gap_lg">
        <div className="field__item">
          <p className="field__title text-md">
            <Link href="tel:88008419595">8 800 841-95-95</Link>
          </p>
          <p className="field__value">Служба поддержки</p>
        </div>
        <div className="field__item">
          <p className="field__title text-md">support@sport.ru</p>
          <p className="field__value">Служба поддержки</p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
