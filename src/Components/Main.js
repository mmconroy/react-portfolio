import React, { Component } from "react";
import "./Main.css";
import wave from "./img/wave.gif";
import linkedinlogo from "./img/linkedinlogo.png";
import githublogo from "./img/githublogo.png";

export class Main extends Component {
  render() {
    return (
      <div>
        <body>
          <main className="content">
            <h1>
              Hey, friend! <span>👋🏼</span>
            </h1>
            <p class="main-text">
              I'm Matt, an empathetic UX Engineer who's passionate about people
              and solving problems.
            </p>
          </main>
          <footer className="footer">
            <a href="https://www.linkedin.com/in/mmconroy" target="_blank">
              <img className="linkedin-img" src={linkedinlogo} alt="LinkedIn" />
            </a>

            <a
              class="footer-img"
              href="https://github.com/mmconroy"
              target="_blank"
            >
              <img className="github-img" src={githublogo} alt="GitHub" />
            </a>
          </footer>
        </body>
      </div>
    );
  }
}

export default Main;
