import Link from "next/link";
import React, { FC } from "react";
import { useIntl } from "react-intl";

interface IFooterElement {
  label: string;
  icon: React.ReactNode;
  href: string;
}

const FooterLinkItem: FC<IFooterElement> = ({ icon, href, label }) => {
  const intl = useIntl();

  return (
    <div className="flex hover:underline">
      {icon}
      <Link href={href}>{intl.formatMessage({ id: label })}</Link>
    </div>
  );
};

export default FooterLinkItem;
