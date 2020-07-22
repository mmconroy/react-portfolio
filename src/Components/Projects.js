import React, { useState } from "react";
import "./Projects.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import octocat from "./img/Octocat.png";
import Harmonize from "./img/harmonize.svg";
import Organize from "./img/organize-me.png";
import Zenith from "./img/zenith.png";
import Kenzie from "./img/kenzie.png";
const projectList = [
  {
    id: 1,
    title: "Harmonize",
    description:
      "Harmonize takes the power of word of mouth communication to better engage communities within the context of their own community.",
    imageURL: Harmonize,
    checked: "false",
  },

  {
    id: 2,
    title: "Organize.me",
    description:
      "Decluttering, purging, moving, or just selling the things you don’t want is a stressful process. Organize.me makes purging and selling things online more accessible for everyone.",
    imageURL: Organize,
    checked: "false",
  },

  {
    id: 3,
    title: "Landing Page Mockup",
    description:
      "Built a high fidelity HTML/CSS landing page from mockup with UI accuracy and using CSS development best practices.",
    imageURL: Zenith,
    checked: "false",
  },
  {
    id: 5,
    title: "Responsive Grid Page",
    description:
      "Created a responsive lo-fi design of a landing page for Kenzie Academy.",
    imageURL: Kenzie,
    checked: "false",
  },
];

function Projects() {
  const [isChecked, setIsChecked] = useState(false);
  const toggleButton = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="cards__wrapper">
      <h2>UX/UI Design</h2>
      {projectList.map((project) => (
        <>
          <Card style={{ width: "300px", marginBottom: "1rem" }}>
            <CardContent>
              <CardActionArea>
                <Typography variant="h5">{project.title}</Typography>
                <CardMedia>
                  {" "}
                  <img
                    className="card-image"
                    style={{
                      width: "300px",
                      height: "200px",
                      objectFit: "cover",
                      imageOrientation: "none",
                      marginBottom: "8px",
                    }}
                    src={project.imageURL}
                    alt="project"
                  />
                  {isChecked && (
                    <div className="overlay">
                      <Typography variant="h5" className="link-text">
                        Open on Github
                      </Typography>
                      <img src={octocat} alt="" className="github-logo" />
                    </div>
                  )}
                </CardMedia>
                <Typography variant="body2" color="textSecondary" component="p">
                  {project.description}
                </Typography>
                <CardActions>
                  <Button
                    size="small"
                    onClick={toggleButton}
                    style={{ marginTop: "1rem" }}
                  >
                    Learn More
                  </Button>
                </CardActions>
              </CardActionArea>
            </CardContent>
          </Card>
        </>
      ))}
    </div>
  );
}

export default Projects;
