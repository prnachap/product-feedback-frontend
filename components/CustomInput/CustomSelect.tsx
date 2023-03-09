import { Box } from "@mui/material";
import { useField } from "formik";
import { AnimatePresence } from "framer-motion";
import { isEmpty } from "lodash";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import MenuList from "../DropdownMenu/MenuList";

type CustomSelectProps = {
  name: string;
  label?: string;
  type?: string;
  description?: string;
  itemLists: string[];
};

const CustomSelect: React.FC<CustomSelectProps> = ({
  label,
  itemLists,
  description,
  ...otherProps
}) => {
  const ref = useRef<HTMLInputElement>(null);
  const [field, meta, helpers] = useField(otherProps);
  const { touched, error } = meta;
  const [showDropdownMenu, setShowDropdownMenu] = useState<boolean>(false);
  const [selectedMenu, setSelectedMenu] = useState<string>("one");

  useEffect(() => {
    helpers.setValue(selectedMenu);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedMenu]);

  const onClickOutside = useCallback(() => setShowDropdownMenu(false), []);
  useClickOutside<HTMLInputElement>({ ref, onClickOutside });
  const handleFocus = () => setShowDropdownMenu(true);
  const handleMenuSelection = (value: string) => {
    setSelectedMenu(value);
    setShowDropdownMenu(false);
  };

  const className = `bg-[#F7F8FD] px-6 py-2 w-full outline-1 rounded-md  text-sm text-american-blue-100 font-normal ${
    touched && !isEmpty(error) ? "outline-jasper" : "outline-none"
  } ${
    touched && !isEmpty(error) ? "outline-jasper" : "focus:outline-indigo-1000"
  }  transition-all`;

  return (
    <Box ref={ref}>
      <label htmlFor={label} className="input-label">
        {label}
      </label>
      <span className="input-description">{description}</span>
      <input
        type="text"
        id={label}
        className={className}
        onFocus={handleFocus}
        {...field}
        {...otherProps}
      />
      <AnimatePresence>
        {showDropdownMenu && (
          <MenuList
            listItems={itemLists}
            onChange={handleMenuSelection}
            value={selectedMenu}
          />
        )}
      </AnimatePresence>
    </Box>
  );
};

export default CustomSelect;
