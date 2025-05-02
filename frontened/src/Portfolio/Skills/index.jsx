import React from 'react';
import "../../index.css";
import html from "../../assets/Logo/html.png"
import css from "../../assets/Logo/css.png"
import js from "../../assets/Logo/js.png"
import react from "../../assets/Logo/react.png"
import py from "../../assets/Logo/py.png"
import java from "../../assets/Logo/java.png"
import mongodb from "../../assets/Logo/mongodb.png"
import mongoose from "../../assets/Logo/mongoose.png"
import node from "../../assets/Logo/nodejs.png"
import express from "../../assets/Logo/express.jpg"
import cplus from "../../assets/Logo/Cplus.png"


const Skills = () => {
  return (
    <>
    <img src="https://clarusway.com/wp-content/uploads/2023/04/full-stack-developer-technical-skills-1024x511.jpg"  className="skill-image" alt="" />
    <div className="main-container">
        <div className="skills-section">
      <h1>💼 Professional Skills</h1>

      {/* Full Stack Development */}
      <div className="skills-category">
        <h2>🌐 Full Stack Development</h2>
        <p>
          Proficient in building end-to-end web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).
          Experienced in both frontend and backend development, including API integration and database management.
        </p>
      <div className="skills-img">
      <img src={html} alt="html"/>HTML5,
       <img src={css} alt="css"/>CSS3, 
       <img src={js} alt="js"/>JavaScript,
       <img src={react} alt="raect"/> React.js, Node.js, Express.js, RESTful APIs, EJS, MongoDB, Mongoose, SQL, PostgreSQL, Authentication: JWT, bcrypt
      </div>
      </div>

      {/* Tools & Technologies */}
      <div className="skills-category">
        <h2>🧰 Tools & Technologies</h2>
        <ul>
          <li>Git, GitHub (Version Control, Branching)</li>
          <li>VS Code, Postman (Development and Testing)</li>
          <li>npm, nodemon (Package Management, Auto-reloading)</li>
          <li>Responsive Design, Media Queries (Mobile-First Approach)</li>
          <li>Tailwind CSS, Bootstrap (CSS Frameworks)</li>
        </ul>
      </div>

      {/* Core Concepts */}
      <div className="skills-category">
        <h2>🧠 Core Concepts</h2>
        <p>Strong understanding of the following concepts:</p>
        <ul>
          <li>Data Structures & Algorithms</li>
          <li>Object-Oriented Programming (OOP)</li>
          <li>Calculus, Linear Algebra (Mathematical Foundation for Computer Science)</li>
        </ul>
      </div>

      {/* Languages */}
      <div className="skills-category">
        <h2>🖥️ Programming Languages</h2>
        <p>
          <img src={cplus} alt="cplus" />C++, 
          <img src={js} alt="js" />JavaScript, 
          <img src={java} alt="java" />Java,
          <img src={py} alt="python" /> Python</p>
      </div>

      {/* Libraries & Frameworks */}
      <div className="skills-category">
        <h2>📚 Libraries & Frameworks</h2>
        <p>React.js, Express.js, Flask, Bootstrap, Tailwind CSS, REST APIs</p>
      </div>

      {/* Technologies & Tools */}
      <div className="skills-category">
        <h2>🧰 Technologies & Tools</h2>
        <p>Git, GitHub, MERN Stack, MySQL, MongoDB</p>
      </div>

      {/* Core Science & Research */}
      <div className="skills-category">
        <h2>🧪 Core Science & Research</h2>
        <ul>
          <li>Physical, Organic, Inorganic Chemistry</li>
          <li>Spectroscopy, Thermodynamics, Quantum Chemistry</li>
          <li>Analytical Chemistry Research</li>
        </ul>
      </div>

      {/* Computer Applications (Academic) */}
      <div className="skills-category">
        <h2>💻 Computer Applications (Academic)</h2>
        <ul>
          <li>MS Office, Scientific Calculations, Data Handling</li>
          <li>Basics of Programming & Algorithms</li>
        </ul>
      </div>
    </div>
    </div>
    </>
  );
};

export default Skills;
