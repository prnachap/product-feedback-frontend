import { Box } from "@mui/material";
import CreateFeedbackBar from "../CreateFeedbackBar.tsx/CreateFeedbackBar";
import FeedbackList from "../FeedbackList/FeedbackList";
import FeedbackLogo from "../LogoCard/FeedbackLogo";
import NavbarMobile from "../Navbar/NavbarMobile";
import RoadmapCard from "../RoadmapCard/RoadmapCard";
import TagsCard from "../TagsCard/TagsCard";

const HomePageContainer: React.FC = () => {
  return (
    <Box className="w-full mx-auto flex flex-col md:mt-14 lg:mt-20 md:gap-8 md:w-[90%] lg:max-w-5xl lg:w-full lg:flex-row">
      <Box className="hidden z-40 lg:max-h-[30rem] sticky md:top-20 md:flex md:flex-row md:justify-between md:gap-3 lg:flex-col lg:gap-5">
        <FeedbackLogo />
        <TagsCard />
        <RoadmapCard />
      </Box>
      <Box className="flex flex-col w-full">
        <NavbarMobile />
        <CreateFeedbackBar />
        <FeedbackList />
      </Box>
    </Box>
  );
};

export default HomePageContainer;
