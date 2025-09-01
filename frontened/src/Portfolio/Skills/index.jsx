import React from "react";
import "./index.css";

// Languages
import python from "../../assets/png-512/Python.png";
import java from "../../assets/png-512/Java.png";
import Cplus from "../../assets/png-512/C++-(CPlusPlus).png";
import C from "../../assets/png-512/C.png";
import mysql from "../../assets/png-512/MySQL.png";
import kotlin from "../../assets/png-512/Kotlin.png";
import html from "../../assets/png-512/HTML5.png";
import css from "../../assets/png-512/CSS3.png";
import js from "../../assets/png-512/JavaScript.png";
import cuda from "../../assets/png-512/cuda.png";
import julia from "../../assets/png-512/Julia.png";
import R from "../../assets/png-512/R-.png";

// Libraries
import tensorflow from "../../assets/png-512/TensorFlow.png";
import pytorch from "../../assets/png-512/PyTorch.png";
import scikit from "../../assets/png-512/scikit-learn.png";
import pandas from "../../assets/png-512/Pandas.png";
import numpy from "../../assets/png-512/NumPy.png";
import matplotlib from "../../assets/png-512/Matplotlib.png";
import keras from "../../assets/png-512/Keras.png";
import seaborn from "../../assets/png-512/seaborn.png";
import scipy from "../../assets/png-512/scipy.png";
import tableau from "../../assets/png-512/tableau.png";
import opencv from "../../assets/png-512/OpenCV.png";

// Technologies
import mongodb from "../../assets/png-512/MongoDB.png";
import android from "../../assets/png-512/Android.png";
import docker from "../../assets/png-512/Docker.png";
import git from "../../assets/png-512/Git.png";
import kubernetes from "../../assets/png-512/Kubernetes.png";
import cicd from "../../assets/png-512/ci.png";
import aws from "../../assets/png-512/AWS.png";
import hadoop from "../../assets/png-512/Apache-Hadoop.png";
import azure from "../../assets/png-512/Azure.png";

export default function Skills() {
  return (
    <section className="skills-container about">
      <h2>💼 Skills</h2>
      <p className="text-color">
        I have a strong command of various <b>Languages</b>, <b>Libraries</b>, and <b>Technologies</b>.
      </p>

      {/* Languages */}
      <h3>🖥️ Languages</h3>
      <div className="skills-grid">
        {[
          { img: python, name: "Python" },
          { img: java, name: "Java" },
          { img: Cplus, name: "C++" },
          { img: C, name: "C" },
          { img: mysql, name: "SQL" },
          { img: kotlin, name: "Kotlin" },
          { img: html, name: "HTML" },
          { img: css, name: "CSS" },
          { img: js, name: "JavaScript" },
          { img: cuda, name: "CUDA" },
          { img: julia, name: "Julia" },
          { img: R, name: "R" },
        ].map((lang, i) => (
          <div className="skill-item" key={i}>
            <img src={lang.img} alt={lang.name} />
            <p>{lang.name}</p>
          </div>
        ))}
      </div>

      {/* Libraries */}
      <h3>📚 Libraries</h3>
      <div className="skills-grid">
        {[
          { img: tensorflow, name: "TensorFlow" },
          { img: pytorch, name: "PyTorch" },
          { img: scikit, name: "Scikit-learn" },
          { img: pandas, name: "Pandas" },
          { img: numpy, name: "NumPy" },
          { img: matplotlib, name: "Matplotlib" },
          { img: keras, name: "Keras" },
          { img: seaborn, name: "Seaborn" },
          { img: scipy, name: "SciPy" },
          { img: tableau, name: "Tableau" },
          { img: opencv, name: "OpenCV" },
        ].map((lib, i) => (
          <div className="skill-item" key={i}>
            <img src={lib.img} alt={lib.name} />
            <p>{lib.name}</p>
          </div>
        ))}
      </div>

      {/* Technologies */}
      <h3>⚙️ Technologies</h3>
      <div className="skills-grid">
        {[
          { img: mysql, name: "MySQL" },
          { img: mongodb, name: "MongoDB" },
          { img: android, name: "Android" },
          { img: docker, name: "Docker" },
          { img: git, name: "Git" },
          { img: kubernetes, name: "Kubernetes" },
          { img: cicd, name: "CI/CD" },
          { img: aws, name: "AWS" },
          { img: hadoop, name: "Hadoop" },
          { img: azure, name: "Azure" },
        ].map((tech, i) => (
          <div className="skill-item" key={i}>
            <img src={tech.img} alt={tech.name} />
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
