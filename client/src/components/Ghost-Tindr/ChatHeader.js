import React from "react";
import { useCookies } from "react-cookie";

export default function ChatHeader(props) {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const logout = () => {
    removeCookie("UserId", cookies.UserId);
    removeCookie("AuthToken", cookies.AuthToken);
    window.location.reload();
  };

  return (
    <div className="chat-container-header">
      <div className="profile">
        <div className="img-container">
          <img src={props.ghost.url1} alt={"photo of " + props.ghost.name} />
        </div>
        <h3>{props.ghost.name}</h3>
      </div>
      <i className="log-out-icon" onClick={logout}>
        ⇦
      </i>
    </div>
  );
}
