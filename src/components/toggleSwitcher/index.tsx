import { useState } from "react";

const ToggleSwitch = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={isActive}
        onChange={(e) => setIsActive(e.target.checked)}
        className="sr-only peer"
      />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-primary-main after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-secondary-main after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-200"></div>
    </label>
  );
};

export default ToggleSwitch;
