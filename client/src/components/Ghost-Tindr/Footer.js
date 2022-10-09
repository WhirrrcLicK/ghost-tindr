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
    <button className="footerButtons"><img src="https://github.com/WhirrrcLicK/ghost-tindr/blob/main/client/mockups/Untitled_Artwork%206.png?raw=true" height ="60"/><a href="http://localhost:8000/cards"></a>
    </button>
    <div className="last_three">
    <button className="footerButtons"><img src="https://github.com/WhirrrcLicK/ghost-tindr/blob/main/client/mockups/Untitled_Artwork%209.png?raw=true" height ="65"/><a href="http://localhost:8000/cards"></a>
    </button>
    <button className="footerButtons"><img src="https://github.com/WhirrrcLicK/ghost-tindr/blob/main/client/mockups/Untitled_Artwork%208.png?raw=true" height ="65"/><a href="http://localhost:8000/cards"></a>
    </button>
    <button className="footerButtons"><img src="https://github.com/WhirrrcLicK/ghost-tindr/blob/main/client/mockups/Untitled_Artwork%207.png?raw=true" height ="65"/><a href="http://localhost:8000/cards"></a>
    </button>
    </div>
  </div>
  );
}
