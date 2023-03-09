import React from "react";
import Chip from "../Chip/Chip";
import ArrowUpIcon from "../../public/assets/shared/icon-arrow-up.svg";
import CommentIcon from "../../public/assets/shared/icon-comments.svg";

const FeedbackCard: React.FC<FeedbackType> = ({
  title,
  description,
  category,
  upVotes,
  comments,
}) => {
  return (
    <div className="relative bg-white px-8 py-6 rounded-lg grid grid-cols-[3fr,1fr] md:grid-cols-[50px_3fr_100px] items-center gap-4 md:gap-10">
      <Chip className="gap-2 body-three-text flex-col justify-center items-center self-start justify-self-start md:justify-self-auto">
        <ArrowUpIcon className="mt-2" />
        <span>{upVotes}</span>
      </Chip>
      <div className="flex flex-col col-span-full row-span-full  md:col-auto md:row-auto justify-center items-start gap-1">
        <h3>{title}</h3>
        <p>{description}</p>
        <Chip className="mt-2">{category}</Chip>
      </div>
      <div className="flex items-center gap-2 justify-self-end">
        <CommentIcon />
        <span className="font-semibold">{comments}</span>
      </div>
    </div>
  );
};

export default FeedbackCard;
