import React, { useState, useEffect } from "react";
import TinderCards from "./TinderCards";
import TinderCard from "react-tinder-card";
import "./styles.scss";
import axios from "axios";
import { useCookies } from "react-cookie";

export default function ViewProfile(props) {
  // const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  // const [ghost, setGhost] = useState([]);
  // const userId = cookies.UserId;

  // currentProfile = ghost.find((g) => )

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
  

// console.log(getGhost)
  return (
    <article className="viewprofile">
      <container className="user_profile">
        <div className="user_info">User Info</div>
      </container>
      <div className="swipe_buttons">Like or Dislike</div>
    </article>
  );
}
