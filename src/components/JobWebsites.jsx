import React from "react";
import { Typography, List, ListItem, ListItemText, Link } from "@mui/material";

function JobWebsites() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Job Websites
      </Typography>
      <Typography variant="body1" gutterBottom>
        Here are some popular job websites to help you find your next
        opportunity:
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary={
              <Link href="https://www.linkedin.com/jobs/">LinkedIn Jobs</Link>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={<Link href="https://www.indeed.com/">Indeed</Link>}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <Link href="https://www.glassdoor.com/index.htm">Glassdoor</Link>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={<Link href="https://www.monster.com/">Monster</Link>}
          />
        </ListItem>
      </List>
    </div>
  );
}

export default JobWebsites;
