import React, { useState } from "react";
import { useCookies } from "react-cookie";
import "./CardButtons.scss";
import { useHistory, Link } from "react-router-dom";
import Conversations from "./Conversations"

export default function ChatItem(props) {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [ghost, setGhost] = useState([]);

  // let history = useHistory();
  // // console.log("props:", props);
  // const handleClick = () => {
  //   console.log("ghost", props.ghost);
  //   history.push(`/chat/${props.ghost.user_id}`);
  // };

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
