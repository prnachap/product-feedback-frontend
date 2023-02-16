import { getDynamicColorBasedOnStatus } from "../../utils/getDynamicColorBasedOnStatus";

type StatusProps = {
  name: string;
  count: number;
  children?: React.ReactNode;
};

const Status: React.FC<StatusProps> = ({ name, count }) => {
  const bgColor = getDynamicColorBasedOnStatus({ name });
  return (
    <div className="flex justify-between w-full body-one-text text-dark-blue-gray">
      <div className="flex gap-4 justify-center items-center">
        <div className={`h-2 w-2 rounded-full bg-purple-1000`}></div>
        <div>{name}</div>
      </div>
      <div className="font-bold text">{count ?? 0}</div>
    </div>
  );
};

export default Status;
