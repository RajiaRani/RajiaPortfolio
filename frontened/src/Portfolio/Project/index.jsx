import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import Link from "@mui/material/Link";
import image from "../../assets/Image/abroadhub.png";
import image2 from "../../assets/Image/wonderlust.png";

// Replace with your actual projects
const projects = [
  {
    src: image ,
    title: "AbroadHub ",
    description: "Spam email classifier using Scikit-learn and Python.",
    tech: "React, Node.js, Express, MongoDB, NPM, Hostinger",
    github: "https://github.com/RajiaRani/Final-AbroadHub",
    demo: "https://www.abroadhub.in",
  },
  {
    src: image2,
    title: "MiniWonderLust",
    description: "React + Material UI portfolio for university applications.",
    tech: "React, MUI",
    github: "https://github.com/RajiaRani/MiniWonderLust-Project",
    demo: "https://miniwonderlust-project.onrender.com/listings",
  },
  {
    src: image2,
    title: "AI Chatbot",
    description: "Conversational bot built with NLP techniques.",
    tech: "Python, NLTK, Flask",
    github: "https://github.com/yourname/chatbot",
    demo: "",
  },
    {
    src: image ,
    title: "Machine Learning Classifier",
    description: "Spam email classifier using Scikit-learn and Python.",
    tech: "Python, Scikit-learn",
    github: "https://github.com/yourname/ml-classifier",
    demo: "https://your-demo-link.com",
  },
    {
    src: image2,
    title: "AI Chatbot",
    description: "Conversational bot built with NLP techniques.",
    tech: "Python, NLTK, Flask",
    github: "https://github.com/yourname/chatbot",
    demo: "",
  },
    {
    src: image ,
    title: "Machine Learning Classifier",
    description: "Spam email classifier using Scikit-learn and Python.",
    tech: "Python, Scikit-learn",
    github: "https://github.com/yourname/ml-classifier",
    demo: "https://your-demo-link.com",
  },
];

function Media() {
  return (
    <Grid 
      container 
      spacing={3} 
      justifyContent="center" // ✅ center cards
    >
      {projects.map((item, index) => (
        <Grid 
          item 
          xs={12}                // ✅ full row on all screens
          sx={{ maxWidth: "65%" }} // ✅ limit width to 65% of page
          key={index}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: 3,
              bgcolor: "background.paper",
              transition: "0.3s",
              "&:hover": { transform: "scale(1.01)", boxShadow: 6 },
            }}
          >
            {/* Project Image */}
            <img
              style={{
                width: "100%",
                height: 250,          // ✅ bigger banner style
                objectFit: "cover",
              }}
              alt={item.title}
              src={item.src}
            />

            {/* Content */}
            <Box sx={{ p: 3 }}>
              <Typography gutterBottom variant="h5">
                {item.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{ display: "block", color: "text.secondary", mb: 2 }}
              >
                {item.description}
              </Typography>
              <Typography
                variant="caption"
                sx={{ display: "block", color: "text.secondary", mb: 2 }}
              >
                Tech: {item.tech}
              </Typography>

              {/* Links */}
              <Box>
                {item.github && (
                  <Link
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="hover"
                    sx={{ mr: 3 }}
                  >
                    GitHub
                  </Link>
                )}
                {item.demo && (
                  <Link
                    href={item.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="hover"
                  >
                    Live Demo
                  </Link>
                )}
              </Box>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}



export default function Projects() {
  return (
    <div className="main-container">
      <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        My Projects
      </Typography>
      <Media />
    </Box>
    </div>
  );
}
