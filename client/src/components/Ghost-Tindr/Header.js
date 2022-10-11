import React from "react";
import "./header.scss";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link, useHistory } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import IconButton from "@mui/material/IconButton";

export default function Header() {
  return (
      <div className="header">
        <a href="http://localhost:3000/" className="homelink">
        <img
          className="header__logo"
          src="https://github.com/WhirrrcLicK/ghost-tindr/blob/main/client/mockups/Untitled_Artwork%2013.png?raw=true"
          alt="ghost_logo"
        /></a>
      <img
        src="https://github.com/WhirrrcLicK/ghost-tindr/blob/main/client/mockups/Untitled_Artwork%2010.png?raw=true"
        width="820"
        className="gloop"
      ></img>
      </div>
  );
}
