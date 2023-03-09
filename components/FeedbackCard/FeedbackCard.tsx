import React from "react";
import Chip from "../Chip/Chip";
import ArrowUpIcon from "../../public/assets/shared/icon-arrow-up.svg";
import CommentIcon from "../../public/assets/shared/icon-comments.svg";
import { Box, Typography } from "@mui/material";

const FeedbackCard: React.FC<FeedbackType> = ({
  title,
  description,
  category,
  upVotes,
  comments,
}) => {
  return (
    <Box className="relative bg-white px-8 py-6 rounded-lg grid grid-cols-[3fr,1fr] md:grid-cols-[50px_3fr_100px] items-center gap-4 md:gap-10">
      <Chip className="gap-2 body-three-text flex-col justify-center items-center self-start justify-self-start md:justify-self-auto">
        <ArrowUpIcon className="mt-2" />
        <span>{upVotes}</span>
      </Chip>
      <Box className="flex flex-col col-span-full row-span-full  md:col-auto md:row-auto justify-center items-start gap-1">
        <Typography
          variant="h3"
          className="tertiary-text hover:text-indigo-1000 transition-all ease-in-out cursor-pointer"
        >
          {title}
        </Typography>
        <Typography variant="body1" className="body-text">
          {description}
        </Typography>
        <Chip className="mt-2 pointer-events-none">{category}</Chip>
      </Box>
      <Box className="flex items-center gap-2 justify-self-end">
        <CommentIcon />
        <span className="font-semibold">{comments}</span>
      </Box>
    </Box>
  );
};

export default FeedbackCard;
