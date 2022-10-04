import React from 'react'
import './styles.scss'
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link, useHistory } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import IconButton from "@mui/material/IconButton";

export default function Footer(props) {
  return (
    <div className="footer">
    <IconButton>
      <PersonIcon className="back_button" fontSize="large" />
    </IconButton>
    <IconButton>
      <PersonIcon className="footer__icon" fontSize="large" />
    </IconButton>
    <img
      className="footer__icon"
      src="https://i.redd.it/jb1hfi766rb61.png"
      alt="ghost_logo"
    />
    <IconButton>
      <QuestionAnswerIcon className="footer__icon" fontSize="large" />
    </IconButton>
  </div>
  );
}
