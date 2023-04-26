//utils
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

//types
interface ILoading {
  color?: string;
  className?: string;
}
const Loading = ({ color = "text-primary-main", className }: ILoading) => {
  return (
    <div
      className={classNames(
        "flex w-full h-full justify-center items-center",
        className
      )}
    >
      <FontAwesomeIcon size="3x" icon={faSpinner} spinPulse className={color} />
    </div>
  );
};

export default Loading;
