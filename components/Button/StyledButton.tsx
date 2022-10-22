type StyledButtonProps = {
  className?: string;
  children?: React.ReactNode;
};

const StyledButton: React.FC<StyledButtonProps> = ({ className, children }) => {
  return <button className={className ?? "btn-primary"}>{children}</button>;
};

export default StyledButton;
