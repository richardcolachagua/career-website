import React from "react";
import { Typography, Grid2, Card, CardContent, Link } from "@mui/material";

function LinkedInTips() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        LinkedIn Tips
      </Typography>
      <Typography>
        LinkedIn is a powerful networking tool for professionals. Here are some
        tips to optimize your LinkedIn profile:
      </Typography>
      <Grid2 container spacing={3}>
        <Grid2 item xs={12} sm={6}>
          <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Professional Headshot
              </Typography>
              <Typography>
                Your profile picture is one of the first things people notice on
                your LinkedIn profile. Use a professional headshot that clearly
                shows your face and looks friendlt and approachable.
              </Typography>
            </CardContent>
          </Card>
        </Grid2>

        <Grid2 item xs={12} sm={6}>
          <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Contacting Recruiters
              </Typography>
              <Typography variant="body1">
                LinkedIn is a great platform for connecting with recruiters and
                potential employers. Use the search function to find relevant
                recruiters in your industry and send personalized connection
                requests or messages.
              </Typography>
            </CardContent>
          </Card>
        </Grid2>

        <Grid2 item xs={12} sm={6}>
          <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Strong Summary
              </Typography>
              <Typography variant="body1">
                Your LinkedIn summary is your opportunity to showcase your
                professional brand and highlight your key skills and
                experiences. Keep it concise, engaging, and focused on your
                career goals.
              </Typography>
            </CardContent>
          </Card>
        </Grid2>

        <Grid2 item xs={12} sm={6}>
          <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Professional Experience
              </Typography>
              <Typography variant="body1">
                When listing your professional experience on LinkedIn, use clear
                and concise descriptions that highlight your achievements and
                quantify your impact. Use relevant keywords to increase
                visibility in searches.
              </Typography>
            </CardContent>
          </Card>
        </Grid2>

        <Grid2 item xs={12} sm={6}>
          <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h5">Applying to Jobs</Typography>
              <Typography variant="body1">
                LinkedIn is a great resource for finding and applying to job
                opportunities. Follow companies you're interested in, and set up
                job alerts to stay updated on new openings that match your
                criteria.
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>

      <Typography variant="body1">
        If you don't have a LinkedIn profile yet, it's highly recommended to
        create one. LinkedIn is a powerful tool for networking, job searching,
        and building your professional brand.{" "}
        <Link
          href="https://www.linkedin.com/signup"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here
        </Link>{" "}
        to sign up for a new LinkedIn account.{" "}
      </Typography>
    </div>
  );
}

export default LinkedInTips;
