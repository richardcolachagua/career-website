import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  Link,
  Grid2,
} from "@mui/material";

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

      <Typography variant="h5" gutterBottom>
        Understanding the ATS System
      </Typography>
      <Typography variant="body1" gutterBottom>
        Many companies use an Applicant Tracking System (ATS) to scan and filter
        resumes. To ensure your resume gets past the ATS, make sure to:
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
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
        </Grid>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Resume Website Resources
            </Typography>
            <Typography variant="body1" gutterBottom>
              Check out these websites for resume templates, examples, and tips:
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
      </Grid>

      <Grid item xs={12} sm={6}>
        <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Formatting Tips
            </Typography>
            <Typography variant="body1" gutterBottom>
              Proper formatting can make your resume mroe readable and visually
              appealing:
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
      </Grid>

      <Grid item xs={12} md={6}>
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
      </Grid>
    </div>
  );
}

export default ResumeTips;
