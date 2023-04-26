import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { FC, useState } from "react";
import { useIntl } from "react-intl";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";

interface IFooterElement {
  label: string;
  href: string;
}

const FooterLinkItem: FC<IFooterElement> = ({ href, label }) => {
  const intl = useIntl();
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className="flex items-center hover:text-primary-main duration-200"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <FontAwesomeIcon
        icon={isHover ? faCircleDot : faCircle}
        fontSize={12}
        className="mr-2"
      />
      <Link href={href}>{intl.formatMessage({ id: label })}</Link>
    </div>
  );
};

export default FooterLinkItem;
