import React from "react";
import { useCookies } from "react-cookie";
import "./footer.scss";
import { Link } from "react-router-dom";
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
      <a href="http://localhost:3000/cards" className="footerButtons">
        <img
          src="https://github.com/WhirrrcLicK/ghost-tindr/blob/main/client/mockups/Untitled_Artwork%206.png?raw=true"
          height="60"
        />
      </a>
      <div className="last_three">
        {/* <a
          href="http://localhost:3000/profile/${userId}"
          className="footerButtons"
        > */}
        <Link to={`/profile/${props.userId}`}>
          <img
            src="https://github.com/WhirrrcLicK/ghost-tindr/blob/main/client/mockups/Untitled_Artwork%209.png?raw=true"
            height="65"
          />
        </Link>
        {/* </a> */}
        <a href="http://localhost:3000/settings" className="footerButtons">
          <img
            src="https://github.com/WhirrrcLicK/ghost-tindr/blob/main/client/mockups/Untitled_Artwork%208.png?raw=true"
            height="65"
          />
        </a>
        <a href="http://localhost:3000/conversations" className="footerButtons">
          <img
            src="https://github.com/WhirrrcLicK/ghost-tindr/blob/main/client/mockups/Untitled_Artwork%207.png?raw=true"
            height="65"
          />
        </a>
      </div>
    </div>
  );
}
