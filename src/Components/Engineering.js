import React, { useState, Component } from "react";
import "./Engineering.css";
import { StyledSpan } from "./Span.styled";
import todoly_1 from "./img/todoly-1.png";
import hive_1 from "./img/the-hive-1.png";
import indy_1 from "./img/icy-1.png";
import zenith_1 from "./img/zenith-1.png";
import kenzie_1 from "./img/kenzie-1.png";

const projectList = [
  {
    id: 1,
    title: "The Hive",
    description:
      "Kenzie Academy UIE collaboration project. A responsive React app with styled components and vanilla CSS ",
    image1: hive_1,
  },
  {
    id: 2,
    title: "Todo.ly",
    description: "Responsive React app with styled components and vanilla CSS",
    image1: todoly_1,
  },

  {
    id: 3,
    title: "Indy Community Yoga",
    description:
      "Freelance project. Indy Community Yoga. Responsive React website",
    image1: indy_1,
  },

  {
    id: 4,
    title: "Landing Page Mockup",
    description:
      "Built a high fidelity HTML/CSS landing page from mockup with UI accuracy and using CSS development best practices.",
    image1: zenith_1,
  },
  {
    id: 5,
    title: "Responsive Grid Page",
    description:
      "Created a responsive lo-fi design of a landing page for Kenzie Academy.",
    image1: kenzie_1,
  },
];

class Engineering extends Component {
  render() {
    return (
      <div className="cards__wrapper">
        {projectList.map((project) => (
          <>
            <div className="card">
              <StyledSpan>
                <img className="card-image" src={project.image1}></img>
                <p className="desc-text">{project.description}</p>
              </StyledSpan>
            </div>
          </>
        ))}
      </div>
    );
  }
}
export default Engineering;
