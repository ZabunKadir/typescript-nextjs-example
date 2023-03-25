import Link from "next/link";
import { FC } from "react";

const HeaderComponent: FC = () => {
  return (
    <header className="flex w-full h-12 border-b border-gray-900">
      <div>
        <Link href={"/"}>Home</Link>
      </div>
      <div>Email</div>
    </header>
  );
};

export default HeaderComponent;
