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
import kenzie_1 from "./img/kenzie-1.png";
import todoly_2 from "./img/todoly-2.png";
import hive_2 from "./img/the-hive-2.png";
import indy_2 from "./img/icy-2.png";
import zenith_2 from "./img/zenith-2.png";
import kenzie_2 from "./img/kenzie-2.png";
import linkedinlogo from "./img/linkedinlogo.png";
import githublogo from "./img/githublogo.png";

function Main(props) {
  const [projectList, setProjectList] = useState([
    {
      id: 1,
      title: "The Hive",
      description:
        "Kenzie Academy UIE collaboration project. A responsive React app with styled components and vanilla CSS. The case study to this project can be found in the header. ",
      image1: hive_1,
      image2: hive_2,
      displayedImage: hive_1,
      URL: "https://the-hive-app.netlify.app",
    },
    {
      id: 2,
      title: "Indy Community Yoga",
      description:
        "Freelance project for Indy Community Yoga done in July 2020. Website design and build.",
      image1: indy_1,
      image2: indy_2,
      displayedImage: indy_1,

      URL: "https://www.indycommunityyoga.org/",
    },
    {
      id: 3,
      title: "Todo.ly",
      description:
        "Created a basic funcationing todo list using JavaScript. Responsive React app with styled components and vanilla CSS.",
      image1: todoly_1,
      image2: todoly_2,
      displayedImage: todoly_1,

      URL: "https://mmconroy-todo-app.netlify.app/Todolist",
    },

    {
      id: 4,
      title: "Landing Page Mockup",
      description:
        "Built a high fidelity HTML/CSS landing page from mockup with UI accuracy and using CSS development best practices.",
      image1: zenith_1,
      image2: zenith_2,
      displayedImage: zenith_1,
      URL: "https://mmconroy-responsive-landing-page.netlify.app/",
    },
    // {
    //   id: 5,
    //   title: "Responsive Grid Page",
    //   description:
    //     "Created a vanilla HTML/CSS responsive lo-fi design of a landing page.",
    //   image1: kenzie_1,
    //   image2: kenzie_2,
    //   displayedImage: kenzie_1,

    //   URL: "https://mmconroy-css-grid-activity.netlify.app/",
    // },
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
          I'm Matt, an empathetic UI Developer who's passionate about people and
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
              Being a designer who also codes allows me to be a part of the
              entire user experience. I firmly believe that using human-centered
              design is the only way to create products for{" "}
              <strong style={{ textDecoration: "underline" }}>everyone</strong>.
            </StyledAboutText>
            <StyledAboutText>
              In my spare time, I enjoy biking, reading, volunteering,
              practicing yoga, Crystal Palace Football Club, and trying new
              craft beers. You can find my professional resume{" "}
              <a
                href="https://drive.google.com/file/d/1ltXKmmn8R1fKG1uJUNPeUElaGKM_GIto/"
                target="_blank"
              >
                here
              </a>
              .
            </StyledAboutText>
          </div>
        </StyledAboutMe>
      </div>
      <div className="social__wrapper">
        <a href="https://www.linkedin.com/in/mmconroy" target="_blank">
          <img className="linkedin-img" src={linkedinlogo} alt="LinkedIn" />
        </a>

        <a href="https://github.com/mmconroy" target="_blank">
          <img className="github-img" src={githublogo} alt="GitHub" />
        </a>
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
          <div class="contact-row">
            <button type="Submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Main;
