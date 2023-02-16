import { statusTags } from "../../constants";
import Chip from "../Chip/Chip";

const TagsCard: React.FC = () => {
  const renderTags = () => {
    return statusTags.map((tag) => {
      return <Chip key={tag}>{tag}</Chip>;
    });
  };

  return (
    <div className="bg-white w-[15.9375rem] max-w-[15.9375rem] p-6 flex flex-wrap gap-2 rounded-lg">
      {renderTags()}
    </div>
  );
};

export default TagsCard;
