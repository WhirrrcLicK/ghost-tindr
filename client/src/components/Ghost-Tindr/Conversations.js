import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import ChatDisplay from "./ChatDisplay";
import Header from "./Header"
import Footer from "./Footer"
import ChatItem from "./ChatItem"
import "./conversations.scss"

export default function Conversations() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [ghost, setGhost] = useState([]);

  const userId = cookies.UserId;
  const currentGhost = ghost.find(g => userId === g.user_id)
  console.log('current ghost:', currentGhost)
  const matches = !currentGhost ? [] : currentGhost.matches.map(match => {
    const foundGhost = ghost.find(g => match.user_id === g.user_id)
    return <ChatItem ghost={foundGhost} />
  })

  const getGhost = async () => {
    try {
      const response = await axios.get("http://localhost:8000/users", {
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

  // const updateMatches = async (matchedUserId) => {
  //   try {
  //     await axios.put("http://localhost:8000/addmatch", {
  //       userId,
  //       matchedUserId,
  //     });
  //     getGhost();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const getMatches = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:8000/users", {
  //       params: { userId },
  //     });
  //     setGhost(response.data);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="conversations">
      <Header />
      <div className="chat-items-container">
      {matches}
      </div>
      <Footer />
    </div>
  );
}
