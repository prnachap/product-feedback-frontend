// import UpArrowIcon from "../../public/assets/shared/icon-arrow-up.svg";

interface ChipProps {
  requireIcon?: boolean;
  handleClick?: () => void;
}

const Chip: React.FC<ChipProps> = ({ handleClick }) => {
  return (
    <button
      className="py-1 px-4 inline-block rounded-md bg-alice-blue text-sm text-indigo-1000 font-semibold hover:bg-lavender-blue   focus:bg-indigo-1000 focus:text-white transition-all"
      onClick={handleClick}
    >
      ola
    </button>
  );
};

export default Chip;
