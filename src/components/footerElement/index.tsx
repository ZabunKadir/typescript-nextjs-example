import React, { FC } from "react";

interface IFooterElement {
  title: string;
  item: React.ReactNode;
}

const FooterElement: FC<IFooterElement> = ({ title, item }) => {
  return (
    <div className="flex flex-col">
      <h3 className="">{title}</h3>
      {item}
    </div>
  );
};

export default FooterElement;
