import { FC, ReactElement } from "react";
import Link from "next/link";
import { BREAD_CRUMBS } from "../../../DATA/NAVIGATION";
import "./breadcrumbs.scss";

const BreadCrumbs: FC = (): ReactElement => {
  return (
    <div className="breadcrumbs">
      <ul className="breadcrumbs__list nav">
        {BREAD_CRUMBS.map((item, index): ReactElement => {
          const { id, title, link } = item;

          return (
            <li key={id} className="breadcrumbs__item">
              <Link href={link} className="breadcrumbs__link">
                {title}
              </Link>
              {index !== BREAD_CRUMBS.length - 1 && (
                <span className="breadcrumbs__separator">/</span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BreadCrumbs;
