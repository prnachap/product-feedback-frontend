export const statusTags = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];
export const typeOfStatus: FeedbackType["status"][] = [
  "planned",
  "in-progress",
  "live",
];
export const sortBy = [
  "most upvotes",
  "least upvotes",
  "most comments",
  "least comments",
];
export const COLOR_FOR_STATUS = {
  planned: "#F49F85",
  "in-progress": "#AD1FEA",
  live: "#62BCFA",
};

export const dummyDataOne: FeedbackType[] = Array(2).fill({
  title: "More comprehensive reports",
  description:
    "It would be great to see a more detailed breakdown of solutions.",
  category: "Feature",
  upVotes: 12,
  comments: 2,
  status: "live",
});
export const dummyDataTwo: FeedbackType[] = Array(15).fill({
  title: "More comprehensive reports",
  description:
    "It would be great to see a more detailed breakdown of solutions.",
  category: "Feature",
  upVotes: 12,
  comments: 2,
  status: "planned",
});
export const dummyDataThree: FeedbackType[] = Array(5).fill({
  title: "More comprehensive reports",
  description:
    "It would be great to see a more detailed breakdown of solutions.",
  category: "Feature",
  upVotes: 12,
  comments: 2,
  status: "in-progress",
});
