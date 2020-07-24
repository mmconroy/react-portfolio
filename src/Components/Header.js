import React from "react";
import "./Header.css";
import linkedinlogo from "./img/linkedinlogo.png";
import githublogo from "./img/githublogo.png";
import uxfoliologo from "./img/uxfolio-logo.png";

export default function Header() {
  return (
    <nav>
      <a href="https://www.linkedin.com/in/mmconroy" target="_blank">
        <img className="linkedin-img" src={linkedinlogo} alt="LinkedIn" />
      </a>

      <a href="https://github.com/mmconroy" target="_blank">
        <img className="github-img" src={githublogo} alt="GitHub" />
      </a>
      <p className="uxfolio-text">View my case study on UX Folio</p>
      <a href="https://uxfol.io/project/04ac7d79/The-Hive" target="_blank">
        <img className="uxfolio-img" src={uxfoliologo} alt="UX Folio" />
      </a>
      <p className="name">Matt Conroy</p>
    </nav>
  );
}
