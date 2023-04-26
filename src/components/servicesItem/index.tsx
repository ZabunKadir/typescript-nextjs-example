import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import { useIntl } from "react-intl";

interface IServiceItem {
  text: string;
  title: string;
  icon?: IconProp;
  classNames?: string;
}

const ServicesItem: FC<IServiceItem> = ({ title, text, icon, classNames }) => {
  const intl = useIntl();
  return (
    <div className={`flex w-max items-center space-x-6 ${classNames}`}>
      <div className="flex shadow-xl shadow-primary-light w-24 h-24 justify-center items-center bg-primary-main rounded-full">
        {icon && (
          <FontAwesomeIcon icon={icon} className="text-white" size="3x" />
        )}
      </div>
      <div className="flex w-full max-w-[320px] flex-col ">
        <span className="font-bold text-title-medium uppercase break-words">
          {intl.formatMessage({ id: title })}
        </span>
        <span className="text-title-small break-words">
          {intl.formatMessage({ id: text })}
        </span>
      </div>
    </div>
  );
};

export default ServicesItem;
