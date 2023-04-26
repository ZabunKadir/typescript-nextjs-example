//components
import Button from "../button";
//utils
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { useIntl } from "react-intl";
import ImageComponent from "../imageComponent";
import Link from "next/link";

interface INewsItem {
  title: string;
  imgSrc?: string | null;
  text?: string;
  buttonHref?: string;
  className?: string;
}

const NewsItem = ({
  title,
  text,
  imgSrc,
  buttonHref = "#",
  className,
}: INewsItem) => {
  const intl = useIntl();

  return (
    <Link
      href={buttonHref}
      className={`flex flex-col w-full max-w-[320px] min-h-[400px] px-4 pt-6 py-12 space-y-6 rounded-md justify-between items-center border bg-gray-50 border-primary-mid hover:shadow-md hover:shadow-primary-light hover:bg-white duration-300 group ${className}`}
    >
      <div className="flex w-full w-max-[320px] relative h-full min-h-[128px] rounded-lg overflow-hidden border-primary-mid border group-hover:border-warning duration-300">
        <ImageComponent
          src={imgSrc ? imgSrc : "/images/emptyImage.jpg"}
          alt="News image"
          fill
        />
      </div>
      <div className="flex w-full flex-col justify-center space-y-4">
        <span className="text-center text-title-medium uppercase font-medium">
          {title}
        </span>
        <span className="text-center w-full text-title-small max-w-[320px] h-full max-h-[100px] line-clamp-3 break-words">
          {text}
        </span>
      </div>
      <div className="flex w-full justify-center">
        <Button
          icon={faCircleInfo}
          text={intl.formatMessage({ id: "home.more-information" })}
        />
      </div>
    </Link>
  );
};

export default NewsItem;
