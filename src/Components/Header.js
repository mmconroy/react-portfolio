import React from "react";
import "./Header.css";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuSharpIcon from "@material-ui/icons/MenuSharp";
import AppBar from "@material-ui/core/AppBar";
import Link from "@material-ui/core/Link";
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
          <MenuItem
            onClick={handleClose}
            style={{
              fontFamily: "SF Pro Display",
            }}
          >
            Home
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            style={{
              fontFamily: "SF Pro Display",
            }}
          >
            UX Design
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            style={{
              fontFamily: "SF Pro Display",
            }}
          >
            Coding
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            style={{
              fontFamily: "SF Pro Display",
            }}
          >
            About Me
          </MenuItem>
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
            <Link variant="button" color="textPrimary" href="#">
              Home
            </Link>
            <Link variant="button" color="textPrimary" href="#">
              UX Design
            </Link>
            <Link variant="button" color="textPrimary" href="#">
              Coding
            </Link>
            <Link variant="button" color="textPrimary" href="#">
              About Me
            </Link>
          </div>
        </AppBar>
      </div>
    </div>
  );
}
