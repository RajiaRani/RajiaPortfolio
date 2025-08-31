// import * as React from "react";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Skeleton from "@mui/material/Skeleton";
// import Link from "@mui/material/Link";
// import image from "../../assets/Image/abroadhub.png";
// import image2 from "../../assets/Image/wonderlust.png";

// // Replace with your actual projects
// const projects = [
//   {
//     src: image ,
//     title: "AbroadHub ",
//     description: "Spam email classifier using Scikit-learn and Python.",
//     tech: "React, Node.js, Express, MongoDB, NPM, Hostinger",
//     github: "https://github.com/RajiaRani/Final-AbroadHub",
//     demo: "https://www.abroadhub.in",
//   },
//   {
//     src: image2,
//     title: "MiniWonderLust",
//     description: "React + Material UI portfolio for university applications.",
//     tech: "React, MUI",
//     github: "https://github.com/RajiaRani/MiniWonderLust-Project",
//     demo: "https://miniwonderlust-project.onrender.com/listings",
//   },
//   {
//     src: image2,
//     title: "AI Chatbot",
//     description: "Conversational bot built with NLP techniques.",
//     tech: "Python, NLTK, Flask",
//     github: "https://github.com/yourname/chatbot",
//     demo: "",
//   },
//     {
//     src: image ,
//     title: "Machine Learning Classifier",
//     description: "Spam email classifier using Scikit-learn and Python.",
//     tech: "Python, Scikit-learn",
//     github: "https://github.com/yourname/ml-classifier",
//     demo: "https://your-demo-link.com",
//   },
//     {
//     src: image2,
//     title: "AI Chatbot",
//     description: "Conversational bot built with NLP techniques.",
//     tech: "Python, NLTK, Flask",
//     github: "https://github.com/yourname/chatbot",
//     demo: "",
//   },
//     {
//     src: image ,
//     title: "Machine Learning Classifier",
//     description: "Spam email classifier using Scikit-learn and Python.",
//     tech: "Python, Scikit-learn",
//     github: "https://github.com/yourname/ml-classifier",
//     demo: "https://your-demo-link.com",
//   },
// ];

// function Media() {
//   return (
//     <Grid
//       container
//       spacing={3}
//       justifyContent="center" // ✅ center cards
//     >
//       {projects.map((item, index) => (
//         <Grid
//           item
//           xs={12}                // ✅ full row on all screens
//           sx={{ maxWidth: "65%" }} // ✅ limit width to 65% of page
//           key={index}
//         >
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               borderRadius: 2,
//               overflow: "hidden",
//               boxShadow: 3,
//               bgcolor: "background.paper",
//               transition: "0.3s",
//               "&:hover": { transform: "scale(1.01)", boxShadow: 6 },
//             }}
//           >
//             {/* Project Image */}
//             <img
//               style={{
//                 width: "100%",
//                 height: 250,          // ✅ bigger banner style
//                 objectFit: "cover",
//               }}
//               alt={item.title}
//               src={item.src}
//             />

//             {/* Content */}
//             <Box sx={{ p: 3 }}>
//               <Typography gutterBottom variant="h5">
//                 {item.title}
//               </Typography>
//               <Typography
//                 variant="body1"
//                 sx={{ display: "block", color: "text.secondary", mb: 2 }}
//               >
//                 {item.description}
//               </Typography>
//               <Typography
//                 variant="caption"
//                 sx={{ display: "block", color: "text.secondary", mb: 2 }}
//               >
//                 Tech: {item.tech}
//               </Typography>

//               {/* Links */}
//               <Box>
//                 {item.github && (
//                   <Link
//                     href={item.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     underline="hover"
//                     sx={{ mr: 3 }}
//                   >
//                     GitHub
//                   </Link>
//                 )}
//                 {item.demo && (
//                   <Link
//                     href={item.demo}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     underline="hover"
//                   >
//                     Live Demo
//                   </Link>
//                 )}
//               </Box>
//             </Box>
//           </Box>
//         </Grid>
//       ))}
//     </Grid>
//   );
// }

// export default function Projects() {
//   return (
//     <div className="main-container">
//       <Box sx={{ p: 4 }}>
//       <Typography variant="h4" gutterBottom>
//         My Projects
//       </Typography>
//       <Media />
//     </Box>
//     </div>
//   );
// }

import React from "react";
import { Box, Typography, Chip, Link, Grid, Divider } from "@mui/material";
import image from "../../assets/Image/abroadhub.png";
import wonderlust from "../../assets/Image/wonderlust.png";

const projects = [
  {
    logo: image,
    title: "AbroadHub – Immigration & Study Abroad Platform ",
    subtitle:
      "Tech Stack: React, Node.js, Express, MongoDB, NPM, Hostinger Description: A full-stack web application that provides information and services for students and professionals applying to study or immigrate abroad. ",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Hostinger"],
    github: "https://github.com/RajiaRani/Final-AbroadHub",
    demo: "https://www.abroadhub.in",
    completed: "Deployed August 2024",
  },
  {
    logo: wonderlust,
    title: "Wonderlust",
    subtitle:
      "Wonderlust - a dynamic platform for users to create, browse, and manage listings with map integration, user authentication, and responsive design.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Render"],
    github: "https://github.com/RajiaRani/MiniWonderLust-Project",
    demo: "https://miniwonderlust-project.onrender.com/listings",
    completed: "Completed June 2024",
  },
  {
    logo: image,
    title: "AbroadHub – Immigration & Study Abroad Platform ",
    subtitle:
      "Tech Stack: React, Node.js, Express, MongoDB, NPM, Hostinger Description: A full-stack web application that provides information and services for students and professionals applying to study or immigrate abroad. ",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Hostinger"],
    github: "https://github.com/RajiaRani/Final-AbroadHub",
    demo: "https://www.abroadhub.in",
    completed: "Deployed August 2024",
  },
  {
    logo: wonderlust,
    title: "Wonderlust",
    subtitle:
      "Wonderlust - a dynamic platform for users to create, browse, and manage listings with map integration, user authentication, and responsive design.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Render"],
    github: "https://github.com/RajiaRani/MiniWonderLust-Project",
    demo: "https://miniwonderlust-project.onrender.com/listings",
    completed: "Completed June 2024",
  },
];

export default function Project() {
  return (
    <Box sx={{ maxWidth: "55%", margin: "auto", p: 4, backgroundColor:"white" }}>
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>
      <Divider sx={{ mb: 3 }} />

      {projects.map((project, index) => (
        <Box key={index} sx={{ display: "flex", mb: 4 }}>
          {/* Left side logo */}
          <Box
            component="img"
            src={project.logo}
            alt={project.title}
            sx={{
              width: 80,
              height: 70,
              borderRadius: 1,
              objectFit: "cover",
              mr: 2,
            }}
          />

          {/* Right side details */}
          <Box>
            <Typography variant="h6">{project.title}</Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
              {project.subtitle}
            </Typography>

            {/* Tech Stack Tags */}
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 1 }}>
              {project.techStack.map((tech, idx) => (
                <Chip key={idx} label={tech} size="small" />
              ))}
            </Box>

            {/* Links */}
            <Box sx={{ mb: 1 }}>
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                  sx={{ mr: 2 }}
                >
                  GitHub
                </Link>
              )}
              {project.demo && (
                <Link
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                >
                  Live Demo
                </Link>
              )}
            </Box>
            {/* Completed / Deployed Date */}
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              {project.completed}
            </Typography>
            <hr/>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
