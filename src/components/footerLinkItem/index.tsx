import Link from "next/link";
import React, { FC } from "react";

interface IFooterElement {
  label: string;
  icon: React.ReactNode;
  href: string;
}

const FooterLinkItem: FC<IFooterElement> = ({ icon, href, label }) => {
  return (
    <div className="flex">
      {icon}
      <Link href={href}>{label}</Link>
    </div>
  );
};

export default FooterLinkItem;
