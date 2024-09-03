import React from "react";
import { Typography, List, ListItem, ListItemText } from "@mui/material";

function InterviewPrep() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Interview Preperation
      </Typography>
      <Typography variant="body1" gutterBottom>
        Interviews can be nerve-wracking, but proper preparation can help you
        feel more confident and increase your chances of success. Here are some
        tips for interview preparation:
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Research the company and the role" />
        </ListItem>{" "}
        <ListItem>
          <ListItemText primary="Practice answerinb common interview questions" />
        </ListItem>{" "}
        <ListItem>
          <ListItemText primary="Prepare questions to ask the interviewer" />
        </ListItem>{" "}
        <ListItem>
          <ListItemText primary="Dress professionally and arrive on time" />
        </ListItem>
      </List>
    </div>
  );
}

export default InterviewPrep;
