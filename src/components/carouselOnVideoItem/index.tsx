//components
import Button from "../button";
//utils
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { useIntl } from "react-intl";

interface ICarouselProps {
  title: string;
  information: string;
  buttonText: string;
  buttonHref: string;
  className?: string;
}

const CarouselItemOnVideo = ({
  title,
  information,
  buttonText,
  buttonHref,
  className,
}: ICarouselProps) => {
  const router = useRouter();
  const intl = useIntl();

  return (
    <div
      className={`flex w-full h-full justify-center items-center ${className}`}
    >
      <div className="w-full max-w-max flex flex-col items-center justify-center space-y-6 rounded-xl p-4 bg-gray-600 bg-opacity-30">
        <span className="text-h2 text-white w-max items-center text-center px-4 font-bold break-words">
          {intl.formatMessage({ id: title })}
        </span>
        <span className="text-title-small text-white w-max items-center text-center px-4 font-semibold break-words">
          {intl.formatMessage({ id: information })}
        </span>
        <Button
          icon={faCircleInfo}
          text={intl.formatMessage({ id: buttonText })}
          onClick={() => router.push(buttonHref)}
        />
      </div>
    </div>
  );
};

export default CarouselItemOnVideo;
