import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import "./conversations.scss"

export default function ChatItem(props) {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [ghost, setGhost] = useState([]);

  console.log('props:', props)

  const userId = cookies.UserId;

  // const getGhost = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:8000/users", {
  //       params: { userId },
  //     });
  //     setGhost(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getGhost();
  // }, []);

  return (
    <div className="chat-item">
      <div className="profile">
        <div className="img-container">
          <img src={props.ghost.url1} alt={"photo of " + props.ghost.name} />
        </div>
        <p>{props.ghost.name}</p>
      </div>
    </div>
  );
}
