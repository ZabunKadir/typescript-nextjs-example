import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { motion } from "framer-motion";
import classNames from "classnames";

interface IButtonProps {
  text: string;
  type?: string;
  buttonType?: string;
  icon?: IconProp;
  onClick?: () => void;
  className?: string;
}

const Button = ({
  text,
  icon,
  onClick,
  className,
  type = "button",
  buttonType = "primary",
}: IButtonProps) => {
  return (
    <motion.button
      initial={{ opacity: 1 }}
      whileTap={{ scale: 0.9 }}
      whileInView={{ opacity: 1 }}
      type="button"
      className={classNames(
        `flex justify-center items-center text-white font-semibold py-2 px-4 rounded-lg text-title-small duration-300 max-h-[44px] w-max ${className}`,
        buttonType === "primary" && "bg-primary-main hover:bg-primary-mid",
        buttonType === "secondary" && " bg-warning hover:bg-orange-mid"
      )}
      onClick={onClick}
    >
      {icon && <FontAwesomeIcon icon={icon} className="mr-2" />}
      {text}
    </motion.button>
  );
};

export default Button;
