import React from "react";
import FeedbackCard from "../FeedbackCard/FeedbackCard";
const dummyApiData: FeedbackType[] = Array(10).fill({
  title: "Add tags for solutions",
  description: "Easier to search for solutions based on a specific stack.",
  category: "Enhancment",
  upVotes: 112,
  comments: 2,
});

const FeedbackList: React.FC = () => {
  const renderFeedbackList = () => {
    return dummyApiData.map((item) => {
      return <FeedbackCard key={item.title} {...item} />;
    });
  };

  return (
    <div className="mt-8 flex flex-col gap-4 z-10 px-3 w-full md:px-0 md:mt-6">
      {renderFeedbackList()}
    </div>
  );
};

export default FeedbackList;
