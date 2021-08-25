import React from "react";
import "../assets/about.css";

function About() {
  return (
    <div className="App">
      <div className="App-text about">
        <div className="about-text__title">
          Hello, I'm{" "}
          <span className="about-text__title-big">Robert Martino</span>.
        </div>
        <div className="about-text__title">
          I'm a data scientist open to interesting opportunities
        </div>
        <div className="about-text__body">
          I graduated from Rensselaer Polytechnic Institute with a B.S. in
          Computer Science in 2017 and a M.S. in Computer Science in 2018.
          <br />
          <br />
        </div>
        <div className="about-social">
          <div className="about-social__title">You can find me here</div>
          <div className="about-social__links">
            <a
              className="about-social__link"
              href="https://linkedin.com/in/bobbymartino"
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIN
            </a>
            <a
              className="about-social__link"
              href="https://github.com/bobbydmartino"
              rel="noopener noreferrer"
              target="_blank"
            >
              github
            </a>
            <a
              className="about-social__link"
              href="/assets/resume.pdf"
              rel="noopener noreferrer"
              target="_blank"
            >
              Resume
            </a>
            <a
              className="about-social__link"
              href="mailto:bobbydmartino@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
