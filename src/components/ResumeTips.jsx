import React from "react";
import { Typography, List, ListItem, ListItemText } from "@mui/material";

function ResumeTips() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Resume Tips
      </Typography>
      <Typography variant="body1" gutterBottom>
        Your resume is often the first impression you make on potential
        employers. Here are some tips to help you create a compelling resume:
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Tailor your resume to the job you're applying for" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Highlight your relevant skills and experience" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Use clear and concise language" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Proofread for spelling and grammar errors" />
        </ListItem>
      </List>
    </div>
  );
}

export default ResumeTips;
