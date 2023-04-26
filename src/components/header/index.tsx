import { FC, useState } from "react";
//components
import NavItem from "../navItem";
import LanguageSwitcher from "../languageSwitcher";
import ImageComponent from "../imageComponent";

//utils
import Link from "next/link";
import { FormattedMessage } from "react-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faBars,
  faXmark,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

interface IHeader {
  titleOne: string;
  textOne: string;
  titleTwo: string;
  textTwo: string;
}

const navItems = [
  { text: "header.links-1", icon: faHouse, href: "/" },
  { text: "header.links-2", icon: null, href: "/corporate" },
  { text: "header.links-3", icon: null, href: "/products" },
  { text: "header.links-4", icon: null, href: "/defense-industry-products" },
  { text: "header.links-5", icon: null, href: "/consultant" },
  { text: "header.links-6", icon: null, href: "/solutions" },
  { text: "header.links-7", icon: null, href: "/contact" },
];

const HeaderComponent: FC<IHeader> = ({
  titleOne,
  textOne,
  titleTwo,
  textTwo,
}) => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <header className="flex flex-col sticky top-0 z-50 w-full bg-primary-main text-white">
      <div className="flex w-full justify-center p-4">
        <div className="flex w-full desktop:max-w-[78%] items-center">
          <div className="flex justify-between w-full text-primary-main ">
            <Link
              className="flex w-max items-center p-4 rounded-lg hover:shadow-md hover:shadow-gray-500 bg-white text-h4"
              href={"/"}
            >
              <ImageComponent
                src="/images/logo.svg"
                width={156}
                height={96}
                alt="Logo"
                className="object-contain"
              />
            </Link>
            <button
              onClick={() => setIsMenuActive(true)}
              className="flex justify-center w-12 h-12 rounded-full active:bg-primary-mid text-white items-center laptop:hidden"
            >
              <FontAwesomeIcon size="xl" icon={faBars} />
            </button>
          </div>

          <div className="hidden laptop:flex w-full items-center justify-end space-x-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{
                scale: 0.8,
              }}
              className="flex min-w-max items-center"
            >
              <FontAwesomeIcon size="2xl" className="mr-3" icon={faEnvelope} />
              <Link className="flex flex-col" href={`mailto:${textOne}`}>
                <span>{titleOne}</span>

                <span className="font-bold">{textOne}</span>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{
                scale: 0.8,
              }}
              className="flex  min-w-max items-center"
            >
              <FontAwesomeIcon size="2xl" className="mr-3" icon={faPhone} />
              <Link className="flex flex-col" href={`tel:${textTwo}`}>
                <FormattedMessage id={titleTwo} />

                <span className="font-bold">{textTwo}</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
      <nav className="hidden laptop:flex justify-center bg-primary-mid px-4 py-1 space-x-4">
        <div className="flex w-full justify-between desktop:max-w-[75%] ">
          {navItems.map((item, index) => (
            <NavItem key={index} {...item} />
          ))}
        </div>
        <LanguageSwitcher />
      </nav>
      {isMenuActive && (
        <nav className="flex w-full absolute inset-0 h-screen laptop:hidden backdrop-blur">
          <motion.div
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col w-full mobile:w-[70%] tablet:w-[40%] bg-primary-main border-r border-r-warning px-6 py-4 space-y-3"
          >
            <div className="flex items-center w-full justify-end h-max">
              <button
                onClick={() => setIsMenuActive(false)}
                className="flex justify-center w-12 h-12 rounded-full active:bg-primary-mid text-white items-center laptop:hidden"
              >
                <FontAwesomeIcon size="2xl" icon={faXmark} />
              </button>
            </div>
            <div className="flex flex-col w-full py-2 space-y-3 overflow-auto">
              {navItems.map((item, index) => (
                <NavItem key={index} {...item} />
              ))}
            </div>
            <div className="flex flex-col w-full space-y-3">
              <div className="flex w-full  min-w-[200px] items-center">
                <FontAwesomeIcon
                  size="2xl"
                  className="mr-3"
                  icon={faEnvelope}
                />
                <Link className="flex flex-col" href={`mailto:${textOne}`}>
                  <span>{titleOne}</span>
                  <span className="font-bold">{textOne}</span>
                </Link>
              </div>

              <div className="flex w-full  min-w-[200px] items-center">
                <FontAwesomeIcon size="2xl" className="mr-3" icon={faPhone} />
                <Link className="flex flex-col" href={`tel:${textTwo}`}>
                  <FormattedMessage id={titleTwo} />

                  <span className="font-bold">{textTwo}</span>
                </Link>
              </div>
              <LanguageSwitcher />
            </div>
          </motion.div>
        </nav>
      )}
    </header>
  );
};

export default HeaderComponent;
