import React from "react";
import RoadmapNav from "../Navbar/RoadmapNav";
import StatusCardList from "../Status/StatusCardList";
import RoadmapTabs from "../RoadmapTabs/RoadmapTabs";
import { dummyDataOne, dummyDataThree, dummyDataTwo } from "../../constants";

const RoadmapPageContainer = () => {
  return (
    <div className="w-full mx-auto md:mt-14 lg:mt-20 md:w-[90%] lg:max-w-5xl lg:w-full">
      <RoadmapNav />
      <div className="hidden md:grid gap-x-0 px-3 md:px-0 md:grid-cols-3 md:gap-x-2.5 lg:gap-x-8 my-8 h-[70vh] overflow-auto no-scrollbar">
        <StatusCardList feedbackList={dummyDataOne} />
        <StatusCardList feedbackList={dummyDataTwo} />
        <StatusCardList feedbackList={dummyDataThree} />
      </div>
      <RoadmapTabs />
    </div>
  );
};

export default RoadmapPageContainer;
