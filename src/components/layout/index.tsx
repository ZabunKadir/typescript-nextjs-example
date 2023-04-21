import { FC, ReactNode } from "react";
import FooterComponent from "../footer";
import HeaderComponent from "../header";

interface ILayout {
  children: ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <div className="flex flex-col w-full relative h-screen overflow-x-hidden">
      <HeaderComponent
        titleOne="Email"
        textOne="info@example.com"
        titleTwo="header.contact.us"
        textTwo="0544 444 44 44"
      />
      <main className="flex w-full">{children}</main>
      <FooterComponent />
    </div>
  );
};

export default Layout;
