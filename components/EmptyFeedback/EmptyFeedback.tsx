import { Box, Typography } from "@mui/material";
import React from "react";
import StyledButton from "../Button/StyledButton";
import PlusIcon from "../../public/assets/shared/icon-plus.svg";
import Image from "next/image";
import EmptyImage from "../../public/assets/suggestions/illustration-empty.svg";

const EmptyFeedback = () => {
  return (
    <Box className="bg-white w-full h-[90%] rounded-lg flex flex-col justify-center items-center">
      <Box className="mb-6 md:mb-12">
        <EmptyImage />
      </Box>
      <Typography variant="h1" className="primary-text">
        There is no feedback yet.
      </Typography>
      <Typography
        variant="body1"
        className="body-text w-[58%] text-center mt-3 md:mt-4"
      >
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to improve our app.
      </Typography>
      <StyledButton className="flex items-center gap-2 btn-primary mt-6 md:mt-12">
        <PlusIcon />
        <span>Add Feedback</span>
      </StyledButton>
    </Box>
  );
};

export default EmptyFeedback;
