import CreateFeedbackBar from "../CreateFeedbackBar.tsx/CreateFeedbackBar";
import FeedbackLogo from "../LogoCard/FeedbackLogo";
import RoadmapCard from "../RoadmapCard/RoadmapCard";
import TagsCard from "../TagsCard/TagsCard";

const HomePageContainer: React.FC = () => {
  return (
    <div className="max-w-6xl w-full mt-20 mx-auto flex gap-8">
      <div className="flex gap-6 flex-col">
        <FeedbackLogo />
        <TagsCard />
        <RoadmapCard />
      </div>
      <CreateFeedbackBar />
    </div>
  );
};

export default HomePageContainer;
