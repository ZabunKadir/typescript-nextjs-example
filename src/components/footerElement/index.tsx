import React, { FC } from "react";

interface IFooterElement {
  title: string;
  item: React.ReactNode;
}

const FooterElement: FC<IFooterElement> = ({ title, item }) => {
  return (
    <div className="flex w-full flex-col items-center space-y-4">
      <h5 className="font-bold text-h5 text-center">{title}</h5>
      {item}
    </div>
  );
};

export default FooterElement;
