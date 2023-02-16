import CreateFeedbackBar from "../CreateFeedbackBar.tsx/CreateFeedbackBar";
import FeedbackLogo from "../LogoCard/FeedbackLogo";
import NavbarMobile from "../Navbar/Navbar";
import RoadmapCard from "../RoadmapCard/RoadmapCard";
import TagsCard from "../TagsCard/TagsCard";

const HomePageContainer: React.FC = () => {
  return (
    <div className="w-full mx-auto flex flex-col md:mt-20 md:gap-10 md:w-[90%] lg:max-w-5xl lg:w-full lg:flex-row lg:gap-8">
      <div className="hidden  md:flex md:flex-row md:justify-between md:gap-3 lg:flex-col lg:gap-6">
        <FeedbackLogo />
        <TagsCard />
        <RoadmapCard />
      </div>
      <NavbarMobile />
      <CreateFeedbackBar />
    </div>
  );
};

export default HomePageContainer;
