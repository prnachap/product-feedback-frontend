import React from "react";
import { motion } from "framer-motion";

type AnimatedDropdownIconProps = {
  animate: string;
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

const AnimatedDropdownIcon: React.FC<AnimatedDropdownIconProps> = ({
  animate,
}) => {
  return (
    <motion.svg
      initial="initial"
      animate={animate}
      variants={iconHoverVariant}
      width="10"
      height="7"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1l4 4 4-4"
        stroke="#fff"
        strokeWidth="2"
        fill="none"
        fillRule="evenodd"
      />
    </motion.svg>
  );
};

export default AnimatedDropdownIcon;
