import React, { useState } from "react";
import {
  Typography,
  Card,
  CardContent,
  Link,
  Grid2,
  Box,
  TextField,
  Button,
} from "@mui/material";

function ResumeTips() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredResources = [
    { name: "Resume Resource", url: "https://www.resume-resource.com/" },
    { name: "Resume Genius", url: "https://www.resumegenius.com/" },
    { name: "Resume Coach", url: "https://www.resumecoach.com/" },
  ].filter((resource) =>
    resource.name.toLowerCase().includes(searchTerm.toLowerCase)
  );

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Resume Tips
      </Typography>
      <Typography variant="body1" gutterBottom>
        Your resume is often the first impression you make on potential
        employers. Here are some tips to help you create a compelling resume:
      </Typography>

      <Typography variant="h5" gutterBottom>
        Understanding the ATS System
      </Typography>
      <Typography variant="body1" gutterBottom>
        Many companies use an Applicant Tracking System (ATS) to scan and filter
        resumes. To ensure your resume gets past the ATS, make sure to:
      </Typography>

      <Grid2 container spacing={3}>
        <Grid2 item xs={12} sm={6}>
          <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Understanding the ATS System
              </Typography>
              <Typography variant="body1" gutterBottom>
                Many companies use an Applicant Tracking System (ATS) to scan
                and filter resumes. To ensure your resume gets past the ATS,
                make sure to:
              </Typography>
              <Typography variant="body2">
                - Use relevant keywords from the job description
                <br />
                - Avoid using complex formatting or graphics
                <br />- Save your resume in a common file format (e.g., .docx,
                .pdf)
              </Typography>
            </CardContent>
          </Card>
        </Grid2>

        <Grid2 item xs={12} sm={6}>
          <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Resume Website Resources
              </Typography>
              <Typography variant="body1" gutterBottom>
                Check out these websites for resume templates, examples, and
                tips:
              </Typography>
              <Typography variant="body2">
                -{" "}
                <Link href="https://www.resume-resource.com/">
                  Resume Resource
                </Link>
                <br />-{" "}
                <Link href="https://www.resumegenius.com/">Resume Genius</Link>
                <br />-{" "}
                <Link href="https://www.resumecoach.com/">Resume Coach</Link>
              </Typography>
            </CardContent>
          </Card>
        </Grid2>

        <Grid2 item xs={12} sm={6}>
          <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Formatting Tips
              </Typography>
              <Typography variant="body1" gutterBottom>
                Proper formatting can make your resume mroe readable and
                visually appealing:
              </Typography>
              <Typography variant="body2">
                - Use a clean and consistent font (e.g., Arial, Times New Roman)
                <br />
                - Organize your resume into clear sections (e.g., Summary,
                Experience, Education)
                <br />- Use bullet points to highlight your achievements and
                responsibilities
              </Typography>
            </CardContent>
          </Card>
        </Grid2>

        <Grid2 item xs={12} md={6}>
          <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Writing Effective Bullet Points
              </Typography>
              <Typography variant="body1" gutterBottom>
                Well-crafted bullet points can showcase your skills and
                accomplishments effectively:
              </Typography>
              <Typography variant="body2">
                - Start with a strong action verb (e.g., developed, implemented,
                managed)
                <br />
                - Quantify your achievements with numbers and metrics
                <br />- Highlight your unique contributions and impact
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>

      <Typography variant="h5" gutterBottom>
        Related Resources
      </Typography>
      <Box display="flex" alignItems="center" mb={2}>
        <TextField
          label="Search Resources"
          variant="outlined"
          value={searchTerm}
          onChange={handleSearch}
          sx={{ mr: 2 }}
        />
        <Button variant="contained" color="primary">
          Search
        </Button>
      </Box>
      <Grid2 container spacing={2}>
        {filteredResources.map((resource) => (
          <Grid2 item xs={12} sm={6} md={4} key={resource.name}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  <Link
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreffer"
                  >
                    {resource.name}
                  </Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </div>
  );
}

export default ResumeTips;
