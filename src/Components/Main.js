import React, { useState } from "react";
import "./Main.css";
import "./Engineering.css";
import "./Form.css";
import { StyledSpan } from "./Span.styled";
import { StyledCard } from "./Card.styled";
import { StyledAboutMe } from "./About.styled";
import { StyledAboutText } from "./AboutText.styled";
import profile from "./img/profile.jpeg";
import todoly_1 from "./img/todoly-1.png";
import hive_1 from "./img/the-hive-1.png";
import indy_1 from "./img/icy-1.png";
import zenith_1 from "./img/zenith-1.png";
import todoly_2 from "./img/todoly-2.png";
import hive_2 from "./img/the-hive-2.png";
import indy_2 from "./img/icy-2.png";
import zenith_2 from "./img/zenith-2.png";

import react_1 from "./img/react-1.png";
import react_2 from "./img/react-2.png";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

function Main(props) {
  const [projectList, setProjectList] = useState([
    {
      id: 1,
      title: "The Hive",
      description:
        "Responsive React app with styled components and vanilla CSS. ",
      image1: hive_1,
      image2: hive_2,
      displayedImage: hive_1,
      projectURL: "https://the-hive-app.netlify.app",
      githubURL: "https://github.com/KA-Asyncing-Ship/KA-Capstone",
    },
    {
      id: 2,
      title: "Indy Community Yoga",
      description:
        "Design, maintenance, and setup of WordPress site with custom HTML & CSS.",
      image1: indy_1,
      image2: indy_2,
      displayedImage: indy_1,

      projectURL: "https://www.indycommunityyoga.org/",
      githubURL: "",
    },
    {
      id: 3,
      title: "Todo.ly",
      description:
        "Basic functioning . Responsive React app with styled components & vanilla CSS.",
      image1: todoly_1,
      image2: todoly_2,
      displayedImage: todoly_1,

      projectURL: "https://mmconroy-todo-app.netlify.app/",
      githubURL: "https://github.com/mmconroy/todo-app",
    },

    {
      id: 4,
      title: "Landing Page Mockup",
      description: "High fidelity HTML/CSS landing page from mockup.",
      image1: zenith_1,
      image2: zenith_2,
      displayedImage: zenith_1,
      projectURL: "https://mmconroy-responsive-landing-page.netlify.app/",
      githubURL: "https://github.com/mmconroy/zenith-landing-page",
    },
    {
      id: 5,
      title: "React Directory App",
      description: "React app with search queries, API calls, & hooks.",
      image1: react_1,
      image2: react_2,
      displayedImage: react_1,

      projectURL: "https://mmconroy-react-directory.netlify.app/",
      githubURL: "https://github.com/mmconroy/react-directory-app",
    },
  ]);

  const changeBgImage = (id) => {
    setProjectList(
      projectList.map((project) =>
        project.id === id
          ? {
              ...project,
              displayedImage:
                project.displayedImage === project.image1
                  ? project.image2
                  : project.image1,
            }
          : project
      )
    );
  };
  return (
    <div>
      <main className="hero">
        <p className="hero-text">
          I'm Matt, an empathetic UX Engineer who's passionate about people and
          solving problems. I love taking beautiful designs and turning them
          into beautiful code. I'm proficient in HTML, CSS, JavaScript and
          React.
        </p>
      </main>
      <section className="engineering">
        <h1 className="section-title">Projects and Code</h1>
        <div className="cards__wrapper">
          {projectList.map((project) => (
            <>
              <StyledCard>
                <StyledSpan>
                  <a href={project.URL} target="_blank">
                    <img
                      onMouseEnter={() => changeBgImage(project.id)}
                      onMouseOut={() => changeBgImage(project.id)}
                      className="card-image"
                      src={project.displayedImage}
                      // {props.todoItem.completed ? { backgroundImage: "line-through" } : {image2}
                      alt="Card Image"
                    ></img>
                  </a>
                  <p className="desc-text">{project.description}</p>
                  <CardActions>
                    <Button
                      target="_blank"
                      href={project.githubURL}
                      variant="outlined"
                      style={{ marginTop: "1rem" }}
                      size="small"
                    >
                      View on GitHub
                    </Button>
                    <Button
                      target="_blank"
                      href={project.projectURL}
                      variant="outlined"
                      style={{ marginTop: "1rem" }}
                      size="small"
                    >
                      View on Web
                    </Button>
                  </CardActions>
                </StyledSpan>
              </StyledCard>
            </>
          ))}
        </div>
      </section>
      <div className="about__container">
        <img src={profile} className="profile-image"></img>
        <StyledAboutMe>
          <div className="title__wrapper">
            <h1 class="title">
              <span>🎶</span>And you may ask yourself, well/ How did I get here?
              <span>🎶</span>
            </h1>
          </div>
          <div className="text__wrapper">
            <StyledAboutText>
              I was born and raised a
              <a
                href="https://en.wikipedia.org/wiki/Hoosier"
                target="_blank"
                style={{
                  textDecoration: "none",
                  color: "red",
                }}
              >
                {" "}
                Hoosier
              </a>
              *. I've always taken that as a compliment.{" "}
            </StyledAboutText>
            <StyledAboutText>
              Like most midwesterners, I want to work hard and keep those I care
              about happy and healthy. This doesn't make me particularly neat or
              special but it is the ideal I strive for.
            </StyledAboutText>

            <StyledAboutText>
              {" "}
              How I became a UX Engineer is the result of years of following my
              ideals but never really taking my own passions into account.
              Technology, and especially how we interact with it, has always
              been something I've loved. I have been afforded a lot of privilege
              by just being here. And while I am incredibly lucky to be in that
              position, I also have an obligation to use my privilege for good
              and for others. That obligation follows me in everything I do.
            </StyledAboutText>
            <StyledAboutText>
              Being a coder who also designs allows me to be a part of the
              entire user experience. I firmly believe that using human-centered
              design is the only way to create products for{" "}
              <strong style={{ textDecoration: "underline" }}>everyone</strong>.
            </StyledAboutText>
            <StyledAboutText>
              In my spare time, I enjoy biking, reading, volunteering,
              practicing yoga, Crystal Palace Football Club, and trying new
              craft beers. You can find my professional resume{" "}
              <a
                href="https://drive.google.com/file/d/15Ok4JzKkTbHcoAVih-as5KtnFvBUdDzH/view?usp=sharing"
                target="_blank"
              >
                here
              </a>
              .
            </StyledAboutText>
          </div>
        </StyledAboutMe>
      </div>
      <StyledAboutText style={{ padding: "1rem" }}>
        Looking to get in touch? Please use the form below.
      </StyledAboutText>
      <div className="form-wrapper">
        <form action="https://formspree.io/xwkbllrn" method="POST">
          <div className="field">
            <label for="full-name"></label>
            <input
              id="full-name"
              name="full-name"
              type="text"
              placeholder="Full Name"
            />
          </div>
          <div className="field">
            <label for="email"></label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="user@example.com"
            />
          </div>
          <div className="contact-row">
            <label id="comments" for="comments">
              Message
            </label>
            <textarea id="comments" name="comments"></textarea>
          </div>
          <div>
            <Button variant="outlined" type="Submit" size="small">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Main;
