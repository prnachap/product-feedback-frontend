import { Box } from "@mui/material";
import { isEqual, isUndefined } from "lodash";

type StatusProps = {
  name: "planned" | "in-progress" | "live";
  count?: number;
  children?: React.ReactNode;
};

const Status: React.FC<StatusProps> = ({ name, count }) => {
  const bgColor = isEqual(name, "in-progress")
    ? "bg-purple-1000"
    : isEqual(name, "planned")
    ? "bg-vivid-tangerine"
    : "bg-maya-blue";
  return (
    <Box className="flex justify-between w-full body-one-text text-dark-blue-gray capitalize">
      <Box className="flex gap-4 justify-center items-center">
        <Box className={`h-2 w-2 rounded-full ${bgColor}`}></Box>
        <Box>{name}</Box>
      </Box>
      {!isUndefined(count) && (
        <Box className="font-bold text">{count ?? 0}</Box>
      )}
    </Box>
  );
};

export default Status;
