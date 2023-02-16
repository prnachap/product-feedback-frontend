import BlubIcon from "../../public/assets/suggestions/icon-suggestions.svg";
import StyledButton from "../Button/StyledButton";
import PlusIcon from "../../public/assets/shared/icon-plus.svg";
import MenuButton from "../DropdownMenu/MenuButton";
import { sortBy } from "../../constants";

const CreateFeedbackBar: React.FC = () => {
  return (
    <div className="w-full relative">
      <div className="flex items-center justify-between bg-american-blue-200 p-6 rounded-lg min-h-[5rem] max-h-[5rem]">
        <div className="flex gap-4 items-center">
          <BlubIcon />
          <h2 className="text-white">{`${6} Suggestions`}</h2>
          <div className="ml-[38px]">
            <MenuButton<string, string> title="Most Upvotes" options={sortBy} />
          </div>
        </div>
        <div className="flex items-start">
          <StyledButton className="flex items-center gap-2 btn-primary">
            <PlusIcon />
            <span>Add Feedback</span>
          </StyledButton>
        </div>
      </div>
    </div>
  );
};

export default CreateFeedbackBar;
