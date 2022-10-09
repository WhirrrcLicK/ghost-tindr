import React from "react";
import { useCookies } from "react-cookie";
import './footer.scss'
import { Link, useHistory } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import IconButton from "@mui/material/IconButton";

export default function Footer(props) {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const logout = () => {
    removeCookie("UserId", cookies.UserId);
    removeCookie("AuthToken", cookies.AuthToken);
    window.location.reload();
  };

  return (
    <div className="footer">
    <IconButton>
    </IconButton>
    <IconButton>
    </IconButton>
    <IconButton> 
    </IconButton>
    <IconButton>
    </IconButton>
  </div>
  );
}
