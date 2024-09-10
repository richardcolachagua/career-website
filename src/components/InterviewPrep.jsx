import React, { useState } from "react";
import {
  Typography,
  Grid2,
  Card,
  CardContent,
  TextField,
  Button,
  Box,
} from "@mui/material";

function InterviewPrep() {
  const [jobTitle, setJobTitle] = useState("");
  const [industry, setIndustry] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [personalizedTips, setPersonalizedTips] = useState("");
  const [tellMeAboutYourself, setTellMeAboutYourself] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleJobTitleChange = (event) => {
    setJobTitle(event.target.value);
  };

  const handleIndustryChange = (event) => {
    setIndustry(event.target.value);
  };

  const handleExperienceLevelChange = (event) => {
    setExperienceLevel(event.target.value);
  };

  const generatePersonalizedTips = () => {
    // Implement your logic to generate personalized tips based on job title, industry, and experience level

    const personalizedTips = `Personalized tips for ${jobTitle} in the ${industry} industry with ${experienceLevel} experience level.`;
    setPersonalizedTips(personalizedTips);
  };

  const analyzeTellMeAboutYourself = () => {
    const feedback = "Your response looks good! Keep it consise and relevant.";
    setFeedback(feedback);
  };

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

      <Grid2 container spacing={3}>
        <Grid2 item xs={12} sm={6}>
          <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                The STAR Method
              </Typography>
              <Typography variant="body1">
                When answering behavioral interview questions, use the STAR
                method: Situation, Task, Action, Result. This structured
                approach helps you provide clear and concise examples that
                demonstrate your skills and experience.
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
        <Grid2 item xs={12} sm={6}>
          <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Confidence and Body Language
              </Typography>
              <Typography variant="body1">
                Maintain good posture, make eye contact, and speak clearly and
                confidently during the interview. Your body language and tone
                can convey your enthusiasm and professionalism.
              </Typography>
            </CardContent>
          </Card>
        </Grid2>

        <Grid2 item xs={12} sm={6}>
          <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                "Tell Me About Yourself"
              </Typography>
              <Typography variant="body1">
                This common interview question is an opportunity to provide a
                brief overview of your background, skills, and career goals.
                Prepare a concise and relevant response that highlights your
                qualifications for the role.
              </Typography>
            </CardContent>
          </Card>
        </Grid2>

        <Grid2 item xs={12} sm={6}>
          <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Questions for the Interviewer
              </Typography>
              <Typography variant="body1">
                Come prepared with thoughtful questions to ask the interviewer.
                This shows your interest in the role and the company, and allows
                you to gather valuable information to help you make an informed
                decision.
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>

      <Typography variant="h5" gutterBottom>
        Personalized Interview Preparation
      </Typography>
      <Box mb={2}>
        <TextField
          label="Job Title"
          variant="outlined"
          value={jobTitle}
          onChange={handleJobTitleChange}
          sx={{ mr: 2 }}
        />
        <TextField
          label="Industry"
          variant="outlined"
          value={industry}
          onChange={handleIndustryChange}
          sx={{ mr: 2 }}
        />
        <TextField
          label="Experience Level"
          variant="outlined"
          value={experienceLevel}
          onChange={handleExperienceLevelChange}
          sx={{ mr: 2 }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={generatePersonalizedTips}
        >
          Get Personalized Tips
        </Button>
      </Box>
      {personalizedTips && (
        <Typography variant="body1" color="textSecondary">
          {personalizedTips}
        </Typography>
      )}

      <Typography variant="h5" gutterBottom>
        "Tell Me About Yourself" Practice
      </Typography>
      <TextField
        label="Write your response"
        variant="outlined"
        multiline
        rows={4}
        value={tellMeAboutYourself}
        onChange={(event) => setTellMeAboutYourself(event.target.value)}
        sx={{ mb: 2 }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={analyzeTellMeAboutYourself}
      >
        Analyze Response
      </Button>
      {feedback && (
        <Typography variant="body1" color="textSecondary" sx={{ mt: 2 }}>
          {feedback}
        </Typography>
      )}
    </div>
  );
}

export default InterviewPrep;
