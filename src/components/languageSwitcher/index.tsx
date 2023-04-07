import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

const LanguageSwitcher = () => {
  const router = useRouter();
  const [dropdownActive, setDropdownActive] = useState<boolean>(false);
  const languages = [
    { label: "TR", value: "tr", iconSrc: "", iconAlt: "Turkey flag" },
    {
      label: "EN",
      value: "en",
      iconSrc: "./images/enFlag.svg",
      iconAlt: "England flag",
    },
  ];

  return (
    <div className="flex relative">
      <div
        className="flex px-2 py-1 rounded-xl border-2 border-gray-50 hover:cursor-pointer hover:bg-gray-100"
        onClick={() => setDropdownActive(!dropdownActive)}
      >
        <div className="flex items-center justify-between space-x-2">
          <img
            className="w-6 h-6"
            src={router.locale === "en" ? "./images/enFlag.svg" : ""}
          />
          <span className="text-body">{router.locale?.toUpperCase()}</span>
        </div>
        {dropdownActive && (
          <div
            className="flex inset-0 min-h-[48px] flex-col w-full absolute mt-8 bg-white border border-gray-200 rounded-lg overflow-hidden"
            onPointerLeave={() => setDropdownActive(false)}
          >
            {languages.map((item, index) => (
              <button
                key={index}
                className="flex w-full justify-center px-2 space-x-2 hover:bg-gray-100"
                onClick={() =>
                  router.push(router.pathname, router.asPath, {
                    locale: item.value,
                  })
                }
              >
                <img
                  className="w-6 h-6"
                  src={item.iconSrc}
                  alt={item.iconAlt}
                />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
