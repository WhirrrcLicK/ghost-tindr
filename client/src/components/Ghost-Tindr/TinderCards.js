import axios from "axios";
import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

import IconButton from "@mui/material/IconButton";
import Conversations from "./Conversations";

export default function TinderCards() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [ghost, setGhost] = useState([]);
  const [lastDirection, setLastDirection] = useState();

  const userId = cookies.UserId;

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

  const updateMatches = async (matchedUserId) => {
    try {
      await axios.put("http://localhost:8000/addmatch", {
        userId,
        matchedUserId,
      });
      getGhost();
    } catch (err) {
      console.log(err);
    }
  };

  const swiped = (direction, swipedUserId) => {
    if (direction === "right") {
      updateMatches(swipedUserId);
    }
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    // <>
    //   {ghost && (
    //     <div className="tinderCards__cardContainer">
    //       {ghost.map((eachGhost) => (
    //         <TinderCard
    //           className="swipe"
    //           key={eachGhost.name}
    //           preventSwipe={["up", "down"]}
    //         >
    //           <div
    //             style={{ backgroundImage: "url(" + eachGhost.url1 + ")" }}
    //             className="card"
    //           >
    //             <h3>{eachGhost.name}</h3>
    //           </div>
    //         </TinderCard>
    //       ))}
    //     </div>
    //   )}
    // </>
    <>
      {ghost && (
        <div className="dashboard">
          {/* <Conversations ghost={ghost} /> */}
          <div className="tinderCards__cardContainer">
            {ghost.map((eachGhost) => (
              <TinderCard
                className="swipe"
                key={eachGhost.user_id}
                onSwipe={(dir) => swiped(dir, eachGhost.user_id)}
                onCardLeftScreen={() => outOfFrame(eachGhost.name)}
                preventSwipe={["up", "down"]}
              >
                <div
                  style={{ backgroundImage: "url(" + eachGhost.url1 + ")" }}
                  className="card"
                >
                  <h3>{eachGhost.name}</h3>
                </div>
              </TinderCard>
            ))}
          </div>
        </div>
      )}

      {/* <div className="swipeButtons">
        <Link to="/conversations">
          <IconButton>
            <h3>Let's chat</h3>
          </IconButton>
        </Link>
      </div> */}
    </>
  );
}
