//utils
import {
  faChevronRight,
  faEye,
  faMinus,
  faSquareMinus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React, { FC, useState } from "react";

interface INavbarItem {
  text: string;
  pageValue: string;
}

interface INavbarInPage {
  title: string;
  activePage: string;
  activePageAction: React.Dispatch<React.SetStateAction<string>>;
  items: INavbarItem[];
}

const NavbarInPage: FC<INavbarInPage> = ({
  title,
  activePage,
  activePageAction,
  items,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="flex w-full h-max flex-col items-center border tablet:max-w-max rounded-lg overflow-hidden border-gray-400 hover:shadow-md hover:shadow-primary-mid duration-300">
      <div className="flex w-full px-4 items-center">
        <span className="w-full text-title-medium font-bold p-4 text-center text-primary-main">
          {title}
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
          <button
            key={index}
            onClick={() => activePageAction(item.pageValue)}
            className={classNames(
              "flex items-center justify-center w-full p-4 border-t border-gray-400 duration-300 text-gray-800",
              activePage === item.pageValue
                ? "bg-warning text-primary-main"
                : "hover:bg-primary-main hover:text-white"
            )}
          >
            <FontAwesomeIcon icon={faChevronRight} className="mr-2" />
            <span className="text-title-small font-medium">{item.text}</span>
          </button>
        ))}
    </div>
  );
};

export default NavbarInPage;
