import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuSharpIcon from "@material-ui/icons/MenuSharp";
import AppBar from "@material-ui/core/AppBar";
import linkedinlogo from "./img/linkedinlogo.png";
import githublogo from "./img/githublogo.png";

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="header__wrapper">
      <header>
        <MenuSharpIcon
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
          style={{
            width: "24px",
            height: "24px",
            position: "absolute",
            left: "16px",
            top: "22px",
          }}
        ></MenuSharpIcon>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <Link to="/">Home</Link>
          <Link to="/About">About Me</Link>
          Contact
        </Menu>
        <div className="social__wrapper">
          <a href="https://www.linkedin.com/in/mmconroy" target="_blank">
            <img className="linkedin-img" src={linkedinlogo} alt="LinkedIn" />
          </a>

          <a href="https://github.com/mmconroy" target="_blank">
            <img className="github-img" src={githublogo} alt="GitHub" />
          </a>
        </div>
        <p className="name">Matt Conroy</p>
      </header>
      <div className="app-bar">
        <AppBar color="grey">
          <div className="buttons_container">
            <Link variant="button" color="textPrimary" href="/">
              Home
            </Link>
            <Link variant="button" color="textPrimary" href="/About">
              About Me
            </Link>
            <Link to="/" variant="button" color="textPrimary" href="#">
              Contact
            </Link>
          </div>
        </AppBar>
      </div>
    </div>
  );
}
