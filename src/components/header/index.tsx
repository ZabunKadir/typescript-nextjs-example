import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { FormattedMessage } from "react-intl";
import ToggleSwitch from "../toggleSwitcher";
import LanguageSwitcher from "../languageSwitcher";

const HeaderComponent: FC = () => {
  const router = useRouter();

  return (
    <header className="flex w-full  border-b border-gray-900">
      <div>
        <Link href={"/"}>
          <FormattedMessage id={"home.title"} />
        </Link>
      </div>
      <div>Email</div>
      <div></div>

      <ToggleSwitch />
      <LanguageSwitcher />
    </header>
  );
};

export default HeaderComponent;
