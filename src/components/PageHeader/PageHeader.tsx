import { FC, ReactElement } from "react";
import { ProductTitleType } from "@/types/Product";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";

import "./page-header.scss";

type Props = {
  title: ProductTitleType;
};

const PageHeader: FC<Props> = ({ title }): ReactElement => {
  return (
    <div className="page-header">
      <BreadCrumbs />
      <h1 className="page-header__title">{title}</h1>
    </div>
  );
};

export default PageHeader;
