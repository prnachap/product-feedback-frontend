interface ChipProps {
  handleClick?: () => void;
  children?: React.ReactNode;
}

const Chip: React.FunctionComponent<ChipProps> = ({
  handleClick,
  children,
}) => {
  return (
    <button
      className="flex flex-col justify-center py-1 px-4 rounded-md bg-alice-blue text-sm text-indigo-1000 font-semibold hover:bg-lavender-blue   focus:bg-indigo-1000 focus:text-white transition-all"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Chip;
