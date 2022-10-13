import axios from "axios";
import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import CardButtons from "./CardButtons";
import swal from "sweetalert";
import Footer from "./Footer";

export default function TinderCards() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [ghost, setGhost] = useState([]);
  const [lastDirection, setLastDirection] = useState();
  const [profileId, setProfileId] = useState();

  const userId = cookies.UserId;

  const getGhost = async () => {
    try {
      const response = await axios.get("http://localhost:8000/users", {
        params: { userId },
      });
      setGhost(response.data.filter((d) => d.user_id !== userId));
    //   if (ghost !== 0) {
    //   setProfileId(ghost[ghost.length-1].user_id)
    // }
    } catch (error) {}
  };
  console.log("profilestart",profileId)

  useEffect(() => {
    if (ghost.length === 0) {
      getGhost();
    } else {
      setProfileId(ghost[ghost.length-1].user_id);
    }
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

  console.log("profileend",profileId)

  const swiped = (direction, swipedUserId, index) => {
    setProfileId(ghost[index - 1].user_id);
    if (direction === "right") {
      updateMatches(swipedUserId);
      swal({
        icon: 'https://github.com/WhirrrcLicK/ghost-tindr/blob/main/client/mockups/Untitled_Artwork%2012.png?raw=true',
      });
      console.log(`added to matches`);
    }
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <>
      {ghost && (
        <div className="swipe_cards">
          {ghost.map((eachGhost, index) => (
            <TinderCard
              className="swipe"
              key={eachGhost.user_id}
              onSwipe={(dir) => swiped(dir, eachGhost.user_id, index)}
              onCardLeftScreen={() => outOfFrame(eachGhost.name)}
              preventSwipe={["up", "down"]} >
              <div
                style={{ backgroundImage: "url(" + eachGhost.url1 + ")" }}
                className="card" >
                <p className="cardinfo">
                  {eachGhost.name}<br></br>
                  {eachGhost.location}<br></br>
                  {eachGhost.age}
                </p>
              </div>
            </TinderCard>
          ))}
          <CardButtons profileId={profileId} />
          <Footer userId={userId} />
        </div>
      )}
    </>
  );
}
