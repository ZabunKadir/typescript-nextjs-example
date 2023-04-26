import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { motion, useAnimation, transform } from "framer-motion";
import classNames from "classnames";
import { useEffect, useState } from "react";

interface IInputProps {
  label?: string;
  icon?: IconProp;
  name?: string;
  type?: string;
  id?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
  maxLengthPermission?: boolean;
  value?: string;
  className?: string;
}
const mapRemainingToColor = transform([2, 6], ["#FF3333", "#5DBF7B"]);
const mapRemainingToSpringVelocity = transform([0, 5], [30, 0]);

const Input = ({
  label,
  maxLength = 16,
  value = "",
  type = "text",
  id,
  name,
  maxLengthPermission = false,
  icon,
  onChange,
  className,
}: IInputProps) => {
  const charactersRemaining = maxLength - value.length;
  const controls = useAnimation();

  useEffect(() => {
    if (charactersRemaining > 4) return;

    controls.start({
      scale: 1,
      transition: {
        type: "spring",
        velocity: mapRemainingToSpringVelocity(charactersRemaining),
        stiffness: 700,
        damping: 80,
      },
    });
  }, [value.length]);
  return (
    <label className="flex flex-col w-full relative text-gray-500" htmlFor={id}>
      {label && label}
      <input
        className="flex w-full focus:border-primary-mid border border-gray-200 rounded-lg pl-2 pr-[60px] mt-1 h-11 ring-0 outline-warning text-primary-mid duration-300"
        value={value}
        name={name}
        type={type}
        id={id}
        maxLength={maxLengthPermission ? maxLength : undefined}
        onChange={onChange}
      />
      <div className="absolute bottom-[-18px] right-[2px] rounded-lg translate-y-[-50%] text-small p-[10px] pl-[20px] pr-[20px] bg-gradient-to-r from-white  to-white h-10">
        <motion.span
          animate={controls}
          className="block"
          style={{ color: mapRemainingToColor(charactersRemaining) }}
        >
          {charactersRemaining}
        </motion.span>
      </div>
    </label>
  );
};

export default Input;
