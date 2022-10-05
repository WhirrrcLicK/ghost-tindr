import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import Chat from "./Chat";
import ChatHeader from "./ChatHeader";
import Matched from "./Matched";

export default function Conversations() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [ghost, setGhost] = useState([]);

  const userId = cookies.UserId;

  const getGhost = async () => {
    try {
      const response = await axios.get("http://localhost:8000/user", {
        params: { userId },
      });
      setGhost(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGhost();
  }, []);

  return (
    <div className="conversations">
      <ChatHeader ghost={ghost} />
      <div>
        <button className="option">Matches</button>
        <button className="option">Chat</button>
      </div>
      <Matched />
      <Chat />
    </div>
  );
}
