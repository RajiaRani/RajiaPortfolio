import React, { useState } from "react";
import "./index.css";
import cpp from "../../assets/Certificate/cpp.png";
import cpp1 from "../../assets/Certificate/cpp1.png";
import cpp2 from "../../assets/Certificate/cpp2.png";
import cpp3 from "../../assets/Certificate/cpp3.png";
import cpp4 from "../../assets/Certificate/cpp4.png";
import react from "../../assets/Certificate/react.png";
import git from "../../assets/Certificate/git.png";
import html from "../../assets/Certificate/html.png";
import html1 from "../../assets/Certificate/html1.png";
import la from "../../assets/Certificate/la.png";
import algo from "../../assets/Certificate/algo.png";
import algo2 from "../../assets/Certificate/algo2.png";
import math from "../../assets/Certificate/math.png";

export default function Certificates() {
  const [showAll, setShowAll] = useState(false);

  const certificates = [
    {
      src: cpp,
      alt: "Programming in C++: A Hands-on Introduction Specialization (Codio)",
      link: "https://www.coursera.org/account/accomplishments/specialization/ZCPULNSH7UWM",
    },
    {
      src: react,
      alt: "React Basics",
      link: "https://www.coursera.org/account/accomplishments/verify/P6E569X9FNAM",
    },
    {
      src: git,
      alt: "Getting Started with Git and GitHub",
      link: "https://www.coursera.org/account/accomplishments/verify/7Q7MUK54BDE5",
    },
     {
      src: html,
      alt: "Introduction to HTML5",
      link: "https://www.coursera.org/account/accomplishments/verify/WTYMZT8DKC9M",
    },
    {
      src: la,
      alt: "Math for AI beginner part 1 Linear Algebra",
      link: "https://www.coursera.org/account/accomplishments/verify/DEP2TLR8XW6Q",
    },
    {
      src: html1,
      alt: "Introduction to HTML",
      link: "https://www.coursera.org/account/accomplishments/verify/JFTVDAMY4P94",
    },

     {
      src: cpp1,
      alt: "Object-Oriented C++: Inheritance and Encapsulation",
      link: "https://www.coursera.org/account/accomplishments/verify/WW9ECKTK2NF5",
    },
    {
      src: cpp2,
      alt: "C++ Basic Structures: Vectors, Pointers, Strings, and Files",
      link: "https://www.coursera.org/account/accomplishments/verify/9SXTEJ7RY3SU",
    },
    {
      src: cpp3,
      alt: "C++ Object Basics: Functions, Recursion, and Objects",
      link: "https://www.coursera.org/account/accomplishments/verify/2P83TQUB32BA",
    },
     {
      src: cpp4,
      alt: "C++ Basics: Selection and Iteration",
      link: "https://www.coursera.org/account/accomplishments/verify/X844C4ZNAY86",
    },
    {
      src: algo,
      alt: "Algorithms on Graphs",
      link: "https://www.coursera.org/account/accomplishments/verify/49GR62XB6MCE",
    },
    {
      src: algo2,
      alt: "Algorithmic Toolbox",
      link: "https://www.coursera.org/account/accomplishments/verify/G7EL5JBQTH4Y",
    },
     {
      src: math,
      alt: "Math Prep: College & Work Ready",
      link: "https://www.coursera.org/account/accomplishments/verify/A8SGGTBBHHRV",
    },
  
  ];

  // Calculate which certificates to show based on state
  const visibleCertificates = showAll ? certificates : certificates.slice(0, 6);

  return (
    <div className="main-container">
      <h2>🎓 My Online Course Certificates</h2>
      <hr />
      <br />
      <div className="certificates-list">
        {visibleCertificates.map((cert, index) => (
          <div className="certificate-item" key={index}>
            {/* Display the logo alongside the title and issuer */}
            <div className="certificate-logo">
              <img src={cert.src} alt={cert.alt} />
            </div>
            <div className="certificate-info">
              <h3>{cert.alt}</h3>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-link"
              >
                View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
      <button className="btn see-more" onClick={() => setShowAll(!showAll)}>
        {showAll ? "See Less" : "See More"}
      </button>
    </div>
  );
}
