import { FC, ReactNode } from "react";
import FooterComponent from "../footer";
import HeaderComponent from "../header";

interface ILayout {
  children: ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <>
      <HeaderComponent />
      <main>{children}</main>
      <FooterComponent />
    </>
  );
};

export default Layout;
