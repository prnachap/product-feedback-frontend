import { Box, Typography } from "@mui/material";

const FeedbackLogo: React.FC = () => {
  return (
    <Box className="bg-gradient-to-r from-purple-500 to-pink-500 w-[15.9375rem] max-w-[15.9375rem] rounded-lg px-6 pt-14 pb-6">
      <Typography variant="h2" className="secondary-text text-white">
        Frontend Mentor
      </Typography>
      <span className="body-two-text text-white">Feedback board</span>
    </Box>
  );
};

export default FeedbackLogo;
