import { FC } from "react";
import { useIntl } from "react-intl";
import FooterElement from "../footerElement";
import FooterLinkItem from "../footerLinkItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationPin,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const footerItems = {
  services: {
    title: "footer.title-3",
    items: [
      { href: "/products", label: "footer.link-1" },
      { href: "/defense-industry-products", label: "footer.link-2" },
      { href: "/consultant", label: "footer.link-3" },
      { href: "/answers", label: "footer.link-4" },
    ],
  },
};
const FooterComponent: FC = () => {
  const intl = useIntl();

  return (
    <footer className="flex flex-col w-full">
      <div className="flex bg-gray-900 w-full h-10 items-center">
        <span className="w-full text-center text-title-small font-semibold text-white italic">
          "Dolorem ipsum quia dolor sit amet"
        </span>
      </div>
      <div className="flex flex-col p-6 tablet:px-12 laptop:px-18 w-full space-y-4 tablet:flex-row tablet:space-x-6 tablet:space-y-0 justify-around">
        <FooterElement
          title={intl.formatMessage({ id: "footer.title-1" })}
          item={
            <span className="text-center w-full text-normal">
              {intl.formatMessage({ id: "footer.purpose-1" })}
            </span>
          }
        />
        {Object.values(footerItems).map((item, index) => (
          <FooterElement
            key={index}
            title={intl.formatMessage({ id: item.title })}
            item={item.items.map((linkItem, index) => (
              <FooterLinkItem key={index} {...linkItem} />
            ))}
          />
        ))}
        <FooterElement
          title={intl.formatMessage({ id: "footer.title-4" })}
          item={
            <div className="flex flex-col space-y-4 w-max">
              <Link
                className="flex items-center hover:text-primary-mid"
                href={`tel:${"0544 444 44 44"}`}
              >
                <FontAwesomeIcon
                  className="flex w-4 h-4 text-primary-main mr-3"
                  icon={faPhone}
                />
                0544 444 44 44
              </Link>

              <Link
                className="flex items-center hover:text-primary-mid"
                href={`mailto:${"info@examples.com"}`}
              >
                <FontAwesomeIcon
                  className="flex w-4 h-4 text-primary-main mr-3"
                  icon={faEnvelope}
                />
                info@examples.com
              </Link>

              <Link
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-primary-mid"
                href={"https://www.google.com/maps/place/Bal%C4%B1kesir"}
              >
                <FontAwesomeIcon
                  className="flex w-3 h-3 text-primary-main mr-3"
                  icon={faLocationPin}
                />
                Example location in Turkey
              </Link>
            </div>
          }
        />
      </div>
      <div className="flex bg-gray-900 w-full h-10 items-center">
        <span className="w-full text-white text-center text-small font-semibold">
          Copyright {new Date(Date.now()).getFullYear()} © Example
        </span>
      </div>
    </footer>
  );
};

export default FooterComponent;
