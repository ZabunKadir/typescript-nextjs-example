import Link from "next/link";
import { FC } from "react";
import { FormattedMessage } from "react-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { useRouter } from "next/router";
import classNames from "classnames";

interface INavItem {
  text: string;
  icon: IconDefinition | null;
  href: string;
}
const NavItem: FC<INavItem> = ({ text, icon, href }) => {
  const router = useRouter();

  return (
    <Link
      className={classNames(
        "flex w-full items-center border-b p-2 laptop:border-0 laptop:uppercase laptop:font-medium laptop:max-w-max hover:text-warning duration-300 laptop:w-max",
        router.pathname === href && "text-warning"
      )}
      href={href}
    >
      {icon && (
        <FontAwesomeIcon
          className={classNames(
            "mr-3",
            router.pathname === href && "text-warning"
          )}
          size="lg"
          icon={icon}
        />
      )}
      <span
        className={classNames(
          "flex w-full text-title-medium items-center laptop:text-normal lg-laptop:text-title-small",
          router.pathname === href && "text-warning"
        )}
      >
        <FormattedMessage id={text} />
      </span>
    </Link>
  );
};
export default NavItem;
