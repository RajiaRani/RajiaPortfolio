import React from "react";
import "../../index.css";
import fullstack from "../../assets/Skills/fullstack.jpg"; // same image used for all cards

const Skills = () => {
  return (
    <div className="skills-container">
      <h1 className="skills-title">💼 Professional Skills</h1>

      <div className="skills-grid">
        {/* Full Stack */}
        <div className="skill-card">
          <img src={fullstack} alt="Full Stack Development" className="skill-img" />
          <h3>🌐 Full Stack Development</h3>
          <p>
            MERN Stack (MongoDB, Express.js, React.js, Node.js), REST APIs,
            SQL, PostgreSQL, Authentication
          </p>
        </div>

        {/* Tools */}
        <div className="skill-card">
          <img src={fullstack} alt="Tools" className="skill-img" />
          <h3>🧰 Tools & Technologies</h3>
          <p>
            Git & GitHub, VS Code, Postman, npm, Bootstrap, Tailwind,
            Responsive Design
          </p>
        </div>

        {/* Languages */}
        <div className="skill-card">
          <img src={fullstack} alt="Languages" className="skill-img" />
          <h3>🖥️ Languages</h3>
          <p>C++, JavaScript, Java, Python</p>
        </div>

        {/* Core Concepts */}
        <div className="skill-card">
          <img src={fullstack} alt="Core Concepts" className="skill-img" />
          <h3>🧠 Core Concepts</h3>
          <p>Data Structures & Algorithms, OOP, Linear Algebra, Calculus</p>
        </div>

        {/* Frameworks */}
        <div className="skill-card">
          <img src={fullstack} alt="Frameworks" className="skill-img" />
          <h3>📚 Frameworks</h3>
          <p>React.js, Express.js, Flask, Bootstrap, Tailwind CSS, REST APIs</p>
        </div>

        {/* CSS */}
        <div className="skill-card">
          <img src={fullstack} alt="CSS Skills" className="skill-img" />
          <h3>🎨 CSS Skills</h3>
          <p>CSS3, Flexbox, Grid, Animations, Media Queries, Responsive Design</p>
        </div>

        {/* Research */}
        <div className="skill-card">
          <img src={fullstack} alt="Research" className="skill-img" />
          <h3>🔬 Research</h3>
          <p>Chemistry, Spectroscopy, Thermodynamics, Quantum Science</p>
        </div>

        {/* AI & ML */}
        <div className="skill-card">
          <img src={fullstack} alt="AI & ML" className="skill-img" />
          <h3>🤖 AI & Machine Learning</h3>
          <p>
            Machine Learning, Neural Networks, Deep Learning, TensorFlow, PyTorch, Scikit-learn
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
