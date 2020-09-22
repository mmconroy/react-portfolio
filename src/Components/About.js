import React, { Component } from "react";
import profile from "./img/profile.jpeg";
import "./About.css";
import { StyledAboutMe } from "./About.styled";
import { StyledAboutText } from "./AboutText.styled";

export class About extends Component {
  render() {
    return (
      <div>
        <StyledAboutMe>
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
    );
  }
}

export default About;
