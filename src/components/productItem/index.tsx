//components
import Button from "../button";
//utils
import { faCircleDot, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { useIntl } from "react-intl";
import ImageComponent from "../imageComponent";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IProductItem {
  title: string;
  imgSrc?: string | null;
  text?: string[];
  buttonHref: string;
  className?: string;
}

const ProductItem = ({
  title,
  text,
  imgSrc,
  buttonHref,
  className,
}: IProductItem) => {
  const intl = useIntl();

  return (
    <Link
      href={buttonHref}
      className={`flex flex-col w-full min-h-[440px] px-4 pt-6 py-12 space-y-6 rounded-md  items-center border bg-gray-50 border-primary-mid hover:shadow-md hover:shadow-primary-light hover:bg-white duration-300 group ${className}`}
    >
      <div className="flex w-full  w-max-[320px] relative h-full max-h-[156px] min-h-[128px] rounded-lg overflow-hidden border-primary-mid border group-hover:border-warning duration-300">
        <ImageComponent
          src={imgSrc ? imgSrc : "/images/emptyImage.jpg"}
          alt="News image"
          fill
        />
      </div>
      <div className="flex w-full flex-col justify-center space-y-4">
        <span className="text-center text-title-medium font-medium">
          {intl.formatMessage({ id: title })}
        </span>
        {text && (
          <div className="flex flex-col w-full justify-start items-start space-y-2">
            {text.map((element, index) => (
              <span
                key={index}
                className="items-center w-full text-normal max-w-[320px] h-max line-clamp-3 break-words"
              >
                <FontAwesomeIcon
                  fontSize={"10px"}
                  className="mr-2 text-orange group-hover:text-primary-mid duration-300"
                  icon={faCircleDot}
                />
                {intl.formatMessage({ id: element })}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};

export default ProductItem;
