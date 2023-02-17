import BlubIcon from "../../public/assets/suggestions/icon-suggestions.svg";
import StyledButton from "../Button/StyledButton";
import PlusIcon from "../../public/assets/shared/icon-plus.svg";
import MenuButton from "../DropdownMenu/MenuButton";
import { sortBy } from "../../constants";

const CreateFeedbackBar: React.FC = () => {
  return (
    <div className="w-full z-40 sticky top-[82.5px] md:top-72 lg:top-20">
      <div className="flex items-center justify-between px-3 gap-2 min-h-[5rem] max-h-[5rem] bg-american-blue-200 md:p-6 md:rounded-lg">
        <div className="flex gap-4 items-center">
          <BlubIcon className="hidden md:inline-block" />
          <h2 className="text-white hidden md:inline-block">{`${6} Suggestions`}</h2>
          <div className="md:ml-[38px]">
            <MenuButton<string> options={sortBy} />
          </div>
        </div>
        <div>
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
