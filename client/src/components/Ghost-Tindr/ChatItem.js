import React, { useState } from "react";
import { useCookies } from "react-cookie";
import "./conversations.scss";
import { useHistory, Link } from "react-router-dom";
import Conversations from "./Conversations";

export default function ChatItem(props) {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [ghost, setGhost] = useState([]);

  const userId = cookies.UserId;

  return (
    <Link to={`/chat/${props.ghost.name}`}>
      <div className="chat-item">
        <div className="profile">
          <div className="img-container">
            <img src={props.ghost.url1} alt={"photo of " + props.ghost.name} />
          </div>
          <p>{props.ghost.name}</p>
          <p>{props.ghost.message1}</p>
        </div>
      </div>
    </Link>
  );
}
