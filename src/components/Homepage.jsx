import React from "react";
import { Typography } from "@mui/material";

function HomePage() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Welcome to Job Resource Website
      </Typography>
      <Typography variant="body1">
        This website provides valuable tips and resources to help you land your
        dream job. Explore our sections on resume writing, LinkedIn
        optimization, interview preperation, and job websites for various
        industries.
      </Typography>
    </div>
  );
}

export default HomePage;
