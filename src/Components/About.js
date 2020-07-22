import React, { Component } from "react";
import profile from "./img/profile.jpeg";
import "./About.css";

export class About extends Component {
  render() {
    return (
      <div>
        <main className="about-me">
          <div className="image__wrapper">
            <img src={profile} alt="" className="profile-img" />
          </div>
          <div className="title__wrapper">
            <h1 class="title">
              <span>🎶</span>And you may ask yourself, well/ How did I get here?
              <span>🎶</span>
            </h1>
          </div>
          <div className="text__wrapper">
            <p className="about-text">
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
            </p>
            <p className="about-text">
              Like most midwesterners, I want to work hard and keep those I care
              about happy and healthy. This doesn't make me particularly neat or
              special but it is the ideal I strive for.
            </p>

            <p className="about-text">
              {" "}
              How I became a UX Engineer is the result of years of following my
              ideals but never really taking my own passions into account.
              Technology, and especially how we interact with it, has always
              been something I've loved. I have been afforded a lot of privilege
              by just being here. And while I am incredibly lucky to be in that
              position, I also have an obligation to use my privilege for good
              and for others. That obligation follows me in everything I do.
            </p>
            <p className="about-text">
              Being a designer who also codes allows me to be a part of the
              entire user experience. I firmly believe that using human-centered
              design is the only way to create products for{" "}
              <strong style={{ textDecoration: "underline" }}>everyone</strong>.
            </p>
            <p className="about-text">
              In my spare time, I enjoy biking, reading, volunteering,
              practicing yoga, Crystal Palace Football Club, and trying new
              craft beers. You can find my professional resume{" "}
              <a
                href="https://drive.google.com/file/d/1iNUXzAlEw-vsYAldxXStZo4LjZ_W6LYJ/view?usp=sharing"
                target="_blank"
              >
                here
              </a>
              .
            </p>
          </div>
        </main>
      </div>
    );
  }
}

export default About;
