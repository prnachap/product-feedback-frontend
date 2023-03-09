interface ChipProps {
  handleClick?: () => void;
  children?: React.ReactNode;
  className?: string;
}

const Chip: React.FunctionComponent<ChipProps> = ({
  handleClick,
  children,
  className,
}) => {
  return (
    <button
      className={`flex py-1 px-4 rounded-md bg-alice-blue text-[0.8125rem] md:text-sm text-indigo-1000 font-semibold hover:bg-lavender-blue   focus:bg-indigo-1000 focus:text-white transition-all ease-in ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Chip;
