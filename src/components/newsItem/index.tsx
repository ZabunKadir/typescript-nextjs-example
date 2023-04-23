//components
import Button from "../button";
//utils
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { useIntl } from "react-intl";
import ImageComponent from "../imageComponent";
import Link from "next/link";

interface INewsItem {
  title: string;
  imgSrc: string;
  text: string;
  buttonHref: string;
  className?: string;
}

const NewsItem = ({
  title,
  text,
  imgSrc,
  buttonHref,
  className,
}: INewsItem) => {
  const router = useRouter();
  const intl = useIntl();

  return (
    <div
      className={`flex w-full justify-center items-center border border-primary-main ${className}`}
    >
      <div>
        <ImageComponent src={imgSrc} alt="News image" />
      </div>
      <div>
        <span>{title}</span>
        <span>{text}</span>
        <Link href={buttonHref}>
          <Button
            icon={faCircleInfo}
            text={intl.formatMessage({ id: "home.more-information" })}
          />
        </Link>
      </div>
    </div>
  );
};

export default NewsItem;
