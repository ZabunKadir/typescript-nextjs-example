import { useRouter } from "next/router";
import { useState } from "react";
import classNames from "classnames";
import ImageComponent from "../imageComponent";

const LanguageSwitcher = ({
  additionalClass = "",
  dropdownClass = "",
}: {
  additionalClass?: string;
  dropdownClass?: string;
}) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const languages = [
    {
      label: "TR",
      value: "tr",
      iconSrc: "/images/trFlag.svg",
      iconAlt: "Turkey flag",
    },
    {
      label: "EN",
      value: "en",
      iconSrc: "/images/enFlag.svg",
      iconAlt: "England flag",
    },
  ];

  return (
    <div className={classNames("flex relative items-center", additionalClass)}>
      <div
        className="flex w-max flex-col p-1 h-max rounded-lg border-2 border-gray-200 hover:cursor-pointer hover:bg-gray-200 text-primary-main bg-gray-100"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex w-full items-center justify-between space-x-2">
          <ImageComponent
            width={24}
            height={24}
            alt={"Flags picker"}
            src={
              router.locale === "en"
                ? "/images/enFlag.svg"
                : "/images/trFlag.svg"
            }
          />
          <span className=" text-normal">{router.locale?.toUpperCase()}</span>
        </div>
        {isOpen && (
          <div
            className={classNames(
              "flex top-10 left-0 right-0 h-min flex-col w-full max-w-max absolute bg-white border border-gray-200 rounded-lg",
              dropdownClass
            )}
          >
            {languages.map((item, index) => (
              <button
                key={index}
                className={
                  "flex w-full justify-center px-2 py-1 space-x-2 hover:bg-gray-200 rounded-lg"
                }
                onClick={() =>
                  router.push(router.pathname, router.asPath, {
                    locale: item.value,
                  })
                }
              >
                <img
                  className="w-6 h-6"
                  width={"auto"}
                  height={"auto"}
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
