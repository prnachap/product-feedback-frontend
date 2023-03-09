import { Box, Typography } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import { Fragment, useState } from "react";
import AnimatedHamburgerIcon from "../AnimatedSvgIcons/AnimatedHamburgerIcon";
import Overlay from "../Overlay/Overlay";
import Sidebar from "../Sidebar/Sidebar";

const NavbarMobile: React.FC = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const handleSideBar = () => setToggleSidebar((prevState) => !prevState);

  const renderSidebar = () => {
    return (
      <AnimatePresence mode="wait">
        {toggleSidebar && (
          <Fragment>
            <Overlay />
            <Sidebar />
          </Fragment>
        )}
      </AnimatePresence>
    );
  };

  return (
    <Box className="sticky top-0 z-30">
      <Box className="bg-gradient-to-r from-purple-500 to-pink-500 w-full max-w-none px-3 py-4 flex justify-between items-center relative z-50 md:hidden">
        <Box>
          <Typography variant="h2" className="secondary-text text-white">
            Frontend Mentor
          </Typography>
          <span className="body-two-text text-white">Feedback board</span>
        </Box>
        <Box onClick={handleSideBar}>
          <AnimatedHamburgerIcon animate={"animate"} />
        </Box>
      </Box>
      {renderSidebar()}
    </Box>
  );
};

export default NavbarMobile;
