import React from "react";
import "./Header.css";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuSharpIcon from "@material-ui/icons/MenuSharp";
import AppBar from "@material-ui/core/AppBar";
import Link from "@material-ui/core/Link";

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
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
            top: "8px",
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
