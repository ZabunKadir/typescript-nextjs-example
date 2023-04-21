import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { motion } from "framer-motion";

interface IButtonProps {
  text: string;
  icon?: IconProp;
  onClick?: () => void;
  className?: string;
}

const Button = ({ text, icon, onClick, className }: IButtonProps) => {
  return (
    <motion.button
      initial={{ opacity: 1 }}
      whileTap={{ scale: 0.9 }}
      whileInView={{ opacity: 1 }}
      className={`flex justify-center items-center bg-primary-main hover:bg-primary-mid text-white font-semibold py-2 px-4 rounded-lg text-title-small duration-300 max-h-[44px] w-max ${className}`}
      onClick={onClick}
    >
      {icon && <FontAwesomeIcon icon={icon} className="mr-2" />}
      {text}
    </motion.button>
  );
};

export default Button;
