import React from "react";
import StyledButton from "../Button/StyledButton";
import PlusIcon from "../../public/assets/shared/icon-plus.svg";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";

const RoadmapNav = () => {
  const router = useRouter();
  const handleBackButton = () => {
    router.back();
  };
  return (
    <Box className="w-full z-40 sticky top-0 md:top-14 lg:top-20">
      <Box className="flex items-center justify-between px-3 gap-2 min-h-[5rem] max-h-[5rem] bg-american-blue-200 md:p-6 md:rounded-lg">
        <Box className="flex flex-col items-start gap-1">
          <StyledButton
            className="btn-back-primary !p-0"
            onClick={handleBackButton}
          >
            <span className="mr-4">
              <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6 9L2 5l4-4"
                  stroke="#fff"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </span>

            <Typography
              variant="h4"
              className="quaternary-text text-white capitalize"
            >
              go back
            </Typography>
          </StyledButton>
          <Typography variant="h1" className="primary-text text-white">
            Roadmap
          </Typography>
        </Box>
        <Box>
          <StyledButton className="flex items-center gap-2 btn-primary">
            <PlusIcon />
            <span>Add Feedback</span>
          </StyledButton>
        </Box>
      </Box>
    </Box>
  );
};

export default RoadmapNav;
