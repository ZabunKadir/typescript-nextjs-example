import Link from "next/link";
import { FC, useState } from "react";
import { useIntl } from "react-intl";
import FooterElement from "../footerElement";

const FooterComponent: FC = () => {
  const intl = useIntl();

  return (
    <footer className="flex w-full h-12 border-b border-gray-900">
      <FooterElement
        title={intl.formatMessage({ id: "title-1" })}
        item={<span>{intl.formatMessage({ id: "label-1" })}</span>}
      />
    </footer>
  );
};

export default FooterComponent;
