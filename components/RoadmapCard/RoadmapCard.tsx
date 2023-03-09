import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { typeOfStatus } from "../../constants";
import Status from "../Status/Status";

const RoadmapCard: React.FC = () => {
  const renderStatus = () => {
    return typeOfStatus.map((status) => (
      <Status key={status} name={status} count={1} />
    ));
  };

  return (
    <Box className="bg-white flex flex-col gap-6 px-6 pt-[19px] pb-6 w-[15.9375rem] max-w-[15.9375rem] rounded-lg">
      <Box className="flex justify-between items-center">
        <Typography
          variant="h3"
          className="tertiary-text text-american-blue-100"
        >
          Roadmap
        </Typography>
        <Link href="/roadmap">
          <a className="body-three-text underline text-indigo-1000">View</a>
        </Link>
      </Box>
      <Box className="flex flex-col items-start capitalize ">
        {renderStatus()}
      </Box>
    </Box>
  );
};

export default RoadmapCard;
