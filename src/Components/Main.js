import React, { Component } from "react";
import "./Main.css";
import "./Engineering.css";
import { StyledSpan } from "./Span.styled";
import todoly_1 from "./img/todoly-1.png";
import hive_1 from "./img/the-hive-1.png";
import indy_1 from "./img/icy-1.png";
import zenith_1 from "./img/zenith-1.png";
import kenzie_1 from "./img/kenzie-1.png";
import todoly_2 from "./img/todoly-2.png";
import hive_2 from "./img/the-hive-2.png";
import indy_2 from "./img/icy-2.png";
import zenith_2 from "./img/zenith-2.png";
import kenzie_2 from "./img/kenzie-2.png";

const projectList = [
  {
    id: 1,
    title: "The Hive",
    description:
      "Kenzie Academy UIE collaboration project. A responsive React app with styled components and vanilla CSS ",
    image1: hive_1,
    image2: hive_2,
  },
  {
    id: 2,
    title: "Todo.ly",
    description: "Responsive React app with styled components and vanilla CSS",
    image1: todoly_1,
    image2: todoly_2,
  },

  {
    id: 3,
    title: "Indy Community Yoga",
    description:
      "Freelance project. Indy Community Yoga. Responsive React website",
    image1: indy_1,
    image2: indy_2,
  },

  {
    id: 4,
    title: "Landing Page Mockup",
    description:
      "Built a high fidelity HTML/CSS landing page from mockup with UI accuracy and using CSS development best practices.",
    image1: zenith_1,
    image2: zenith_2,
  },
  {
    id: 5,
    title: "Responsive Grid Page",
    description:
      "Created a responsive lo-fi design of a landing page for Kenzie Academy.",
    image1: kenzie_1,
    image2: kenzie_2,
  },
];

// function ImageChangeOnHover({ background, hoverBackground }) {
//   const Image = styled.div`
//     background: ${props => `url({props.background}) no-repeat top center`};
//     height: 300px;
//     width: 300px;
//     background-size: cover;
//     &:hover {
//       background: ${props =>
//         `url(${props.hoverBackground}) no-repeat top center`};
//       background-size: contain;
//     }
//   `;

export class Main extends Component {
  render() {
    return (
      <div>
        <main className="content">
          <h1>
            Hey, friend! <span>👋🏼</span>
          </h1>
          <p class="main-text">
            I'm Matt, an empathetic UX Engineer who's passionate about people
            and solving problems.
          </p>
        </main>
        <div className="cards__wrapper">
          {projectList.map((project) => (
            <>
              <div className="card">
                <StyledSpan>
                  <img className="card-image" src={project.image2}></img>
                  <p className="desc-text">{project.description}</p>
                </StyledSpan>
              </div>
            </>
          ))}
        </div>
      </div>
    );
  }
}

export default Main;
