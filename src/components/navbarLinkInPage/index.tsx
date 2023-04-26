//utils
import { faChevronRight, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import { motion } from "framer-motion";
import { useIntl } from "react-intl";

//framer motion config
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const linkItem = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
//types
interface INavbarItem {
  text: string;
  href: string;
}

interface INavbarLinkInPage {
  title: string;
  items: INavbarItem[];
}

const NavbarLinkInPage: FC<INavbarLinkInPage> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();
  const intl = useIntl();

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="flex w-full h-max flex-col items-center border tablet:max-w-max rounded-lg overflow-hidden border-gray-400 hover:shadow-md hover:shadow-primary-mid duration-300"
    >
      <div className="flex w-full px-4 items-center">
        <span className="w-full text-title-medium font-bold p-4 text-center text-primary-main">
          {intl.formatMessage({ id: title })}
        </span>
        <button
          className="flex justify-center items-center w-10 h-10 tablet:w-8 tablet:h-8 hover:bg-primary-main rounded-lg group"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FontAwesomeIcon
            icon={faMinus}
            fontSize={"20px"}
            className="flex text-primary-main group-hover:text-white justify-end"
          />
        </button>
      </div>
      {isOpen &&
        items?.map((item, index) => (
          <motion.div className="flex w-full min-w-[320px]" variants={linkItem}>
            <Link
              href={item.href}
              key={index}
              className={classNames(
                "flex items-center w-full p-4 border-t border-gray-400 duration-300 text-gray-800",
                router.asPath === item.href
                  ? "bg-warning text-primary-main"
                  : "hover:bg-primary-main hover:text-white"
              )}
            >
              <FontAwesomeIcon icon={faChevronRight} className="mr-2" />
              <span className="text-title-small font-medium">
                {intl.formatMessage({ id: item.text })}
              </span>
            </Link>
          </motion.div>
        ))}
    </motion.div>
  );
};

export default NavbarLinkInPage;
