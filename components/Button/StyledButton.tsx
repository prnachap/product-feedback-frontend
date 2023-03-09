type StyledButtonProps = {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
};

const StyledButton: React.FC<StyledButtonProps> = ({
  className,
  children,
  ...restProps
}) => {
  return (
    <button className={className} {...restProps}>
      {children}
    </button>
  );
};

export default StyledButton;
