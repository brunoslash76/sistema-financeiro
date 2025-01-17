"use client";

import { ArrowDownIcon } from "@/components/icons/ArrowDownIcon";
import { useEffect, useRef, useState } from "react";
import "./DropdownMenu.styles.css";

export type DropdownMenuProps = {
  selected: string;
  setSelected: (option: string) => void;
  options: string[];
  placeholder: string;
};

function DropdownMenu({
  selected,
  setSelected,
  options,
  placeholder,
}: DropdownMenuProps) {
  const [isActive, setIsActive] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div className="dropdown-btn" onClick={() => setIsActive(!isActive)}>
        {selected === "" ? placeholder : selected}
        <ArrowDownIcon />
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option, index) => (
            <div
              key={index}
              className="dropdown-item"
              onClick={() => {
                setSelected(option);
                setIsActive(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
