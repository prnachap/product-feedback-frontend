import { AnimatePresence } from "framer-motion";
import React, { useState, useRef } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import AnimatedDropdownIcon from "../AnimatedSvgIcons/AnimatedDropdownIcon";
import MenuList from "./MenuList";

type SortByDropdownProps<T, Y> = {
  title: T;
  options: Y[];
  children?: React.ReactNode;
};

function SortByDropdown<T extends string, Y extends string | number>({
  title,
  options,
}: SortByDropdownProps<T, Y>) {
  const [selectedMenuOption, setSelectedMenuOption] = useState(options[0]);
  const [openMenu, setOpenMenu] = useState(false);
  const dropdownRef = useRef(null);

  const onClickOutside = () => setOpenMenu(false);
  useClickOutside({ ref: dropdownRef, onClickOutside });

  const animate = openMenu ? "animate" : "initial";

  const handleMenu = () => setOpenMenu(!openMenu);
  const handleMenuList = (option: Y) => {
    setSelectedMenuOption(option);
    setOpenMenu(false);
  };

  const renderDropdownList = () => {
    return (
      <AnimatePresence>
        {openMenu && (
          <div className="w-[200px] absolute top-20 z-1">
            <MenuList<Y>
              value={selectedMenuOption}
              onChange={handleMenuList}
              listItems={options}
            />
          </div>
        )}
      </AnimatePresence>
    );
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center px-4 py-6 bg-american-blue-200 text-white text-sm rounded-lg"
        onClick={handleMenu}
      >
        <span className="font-normal">Sort By:</span>
        <span className="font-bold ml-1">{title}</span>
        <AnimatedDropdownIcon animate={animate} />
      </button>
      {renderDropdownList()}
    </div>
  );
}

export default SortByDropdown;
