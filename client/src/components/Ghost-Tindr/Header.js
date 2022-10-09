import React from 'react';
import './header.scss'
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link, useHistory } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import IconButton from "@mui/material/IconButton";




export default function Header() {
  return (
    <div>
    <div className="header">
      <img
        className="header__logo"
        src="https://i.redd.it/jb1hfi766rb61.png"
        alt="ghost_logo"
      />
        <p className="title">Relic</p>
    </div>
        <img src="https://github.com/WhirrrcLicK/ghost-tindr/blob/main/client/mockups/Untitled_Artwork%2010.png?raw=true" width ="820" className="gloop"></img>
        </div>
  );
}