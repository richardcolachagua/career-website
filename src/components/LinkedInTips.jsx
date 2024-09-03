import React from "react";
import { Typography, List, ListItem, ListItemText } from "@mui/material";

function LinkedInTips() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        LinkedIn Tips
      </Typography>
      <Typography variant="body1" gutterBottom>
        LinkedIn is a powerful networking tool for professionals. Here are some
        tips to optimize your LinkedIn profile:
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Use a professional profile picture" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Write a compelling headline and summary" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Showcase your skills and endorsements" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Join relevant groups and engage with your network" />
        </ListItem>
      </List>
    </div>
  );
}

export default LinkedInTips;
