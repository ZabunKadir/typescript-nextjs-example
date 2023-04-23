import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";

interface IServiceItem {
  text: string;
  title: string;
  icon?: IconProp;
  classNames?: string;
}

const ServicesItem: FC<IServiceItem> = ({ title, text, icon, classNames }) => {
  return (
    <div className={`flex w-ful items-center space-x-2 ${classNames}`}>
      <div className="flex shadow-xl shadow-primary-light w-24 h-24 justify-center items-center bg-primary-main rounded-full">
        {icon && (
          <FontAwesomeIcon icon={icon} className="text-white" size="3x" />
        )}
      </div>
      <div className="flex w-max flex-col text-center">
        <span className="font-bold text-title-medium uppercase break-words">
          {title}
        </span>
        <span className="text-title-small">{text}</span>
      </div>
    </div>
  );
};

export default ServicesItem;
