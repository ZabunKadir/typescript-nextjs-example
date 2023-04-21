import { useState, useEffect, useRef } from "react";

export default function useDropdownMenuScroll() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      const dropdown = dropdownRef.current;
      if (dropdown) {
        const windowHeight = window.innerHeight;
        const offset = dropdown.getBoundingClientRect().bottom;
        const height = dropdown.offsetHeight;
        if (offset + height > windowHeight) {
          window.scrollBy(0, offset + height - windowHeight);
        }
      }
    }
  }, [isOpen]);

  return { isOpen, setIsOpen, dropdownRef };
}
