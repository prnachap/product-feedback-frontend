import BlubIcon from "../../public/assets/suggestions/icon-suggestions.svg";
import StyledButton from "../Button/StyledButton";
import PlusIcon from "../../public/assets/shared/icon-plus.svg";
import MenuButton from "../DropdownMenu/MenuButton";
import { sortBy } from "../../constants";
import { Box, Typography } from "@mui/material";

const CreateFeedbackBar: React.FC = () => {
  return (
    <Box className="w-full z-40 sticky top-[82.5px] md:top-[258px] lg:top-20">
      <Box className="flex items-center justify-between px-3 gap-2 min-h-[5rem] max-h-[5rem] bg-american-blue-200 md:p-6 md:rounded-lg">
        <Box className="flex gap-4 items-center">
          <BlubIcon className="hidden md:inline-block" />
          <Typography
            variant="h2"
            className="secondary-text text-white hidden md:inline-block"
          >{`${6} Suggestions`}</Typography>
          <Box className="md:ml-[38px]">
            <MenuButton<string> options={sortBy} />
          </Box>
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

export default CreateFeedbackBar;
