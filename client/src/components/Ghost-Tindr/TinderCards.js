import axios from "axios";
import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import { useCookies } from "react-cookie";
import "./browse.scss"

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
  console.log(ghost);

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
    <>
      {ghost && (
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
                <p>{eachGhost.name}</p>
              </div>
            </TinderCard>
          ))}
        </div>
      )}
    </>
  );
}
