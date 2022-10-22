import React from "react";
import { motion } from "framer-motion";

type MenuButtonProps = {
  title: string;
  isMenuOpen: boolean;
  handleMenu: () => void;
};

const iconHoverVariant = {
  initial: {
    rotate: "0deg",
  },
  animate: {
    rotate: "180deg",
    transition: {
      type: "tween",
      duration: "0.4",
    },
  },
};

const MenuButton: React.FC<MenuButtonProps> = ({
  title,
  handleMenu,
  isMenuOpen,
}) => {
  return (
    <button
      className="flex items-center px-4 py-6 bg-american-blue-200 text-white text-sm rounded-lg"
      onClick={handleMenu}
    >
      <span className="font-normal">Sort By:</span>
      <span className="font-bold ml-1">{title}</span>
      <motion.svg
        initial="initial"
        animate={isMenuOpen ? "animate" : "initial"}
        variants={iconHoverVariant}
        width="10"
        height="7"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1l4 4 4-4"
          stroke="#fff"
          stroke-width="2"
          fill="none"
          fill-rule="evenodd"
        />
      </motion.svg>
    </button>
  );
};

export default MenuButton;
