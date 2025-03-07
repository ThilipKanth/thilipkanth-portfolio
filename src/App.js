import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      
      <section id="home" className="section home">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">Hello, I'm Thilip Kanth</h1>
          <p className="hero-subtitle">I build modern, elegant, and scalable web applications.</p>
          <a href="#projects" className="cta-button">View My Work</a>
        </motion.div>
      </section>
      
      <section id="about" className="section about">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>
        <p>I specialize in frontend and backend development, focusing on intuitive user experiences and seamless performance.</p>
      </section>
      
      <section id="projects" className="section projects">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Projects
        </motion.h2>
        <div className="project-list">
          <motion.div
            className="project-card"
            whileHover={{ scale: 1.05 }}
          >
            Project 1
          </motion.div>
          <motion.div
            className="project-card"
            whileHover={{ scale: 1.05 }}
          >
            Project 2
          </motion.div>
          <motion.div
            className="project-card"
            whileHover={{ scale: 1.05 }}
          >
            Project 3
          </motion.div>
        </div>
      </section>
      
      <section id="contact" className="section contact">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Contact Me
        </motion.h2>
        <p>Let's work together! Feel free to reach out to me.</p>
        <div className="social-links">
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="mailto:youremail@example.com"><FaEnvelope /></a>
        </div>
      </section>
    </div>
  );
};

export default App;
