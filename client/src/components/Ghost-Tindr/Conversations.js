import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import ChatDisplay from "./ChatDisplay";
import Matched from "./Matched";
import Header from "./Header"
import Footer from "./Footer"
import ChatItem from "./ChatItem"
import "./conversations.scss"

export default function Conversations() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [ghost, setGhost] = useState([]);

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

  const getMatches = async () => {
    try {
      const response = await axios.get("http://localhost:8000/user", {
        params: { userId },
      });
      setGhost(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="conversations">
      <Header />
      {ghost.matches && <Matched matches={ghost.matches} />}
      <div class="chat-items-container">
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      </div>
      <Footer />
    </div>
  );
}
