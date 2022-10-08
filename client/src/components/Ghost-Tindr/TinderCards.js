import axios from "axios";
import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import { useCookies } from "react-cookie";
import { useHistory, Link } from "react-router-dom";

export default function TinderCards() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [ghost, setGhost] = useState([]);
  const [lastDirection, setLastDirection] = useState();
  const [profileId, setProfileId] = useState();

  const userId = cookies.UserId;
  const history = useHistory();


  const getGhost = async () => {
    try {
      const response = await axios.get("http://localhost:8000/users", {
        params: { userId },
      });
      console.log("rrrr", response.data);
      setGhost(response.data.filter((d) => d.user_id !== userId));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (ghost.length === 0) {
      getGhost();
    } else {
      console.log("ghost", ghost);
      console.log("p", profileId);
      setProfileId(ghost[0].user_id);
    }
  }, [ghost, profileId]);

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
              <Link to={`/profile/${eachGhost.user_id}`}>
                <button className="see-profile-button">TESTING 1</button>
              </Link>
              <Link to={`/profile/${profileId}`}>
                <button className="see-profile-button">TESTING 2</button>
              </Link>
              <Link to={`/profile/${eachGhost.user_id}`}>
                <button className="see-profile-button">TESTING 3</button>
              </Link>
            </TinderCard>
          ))}
          {/* // <button><ProfileButton /></button> */}
        </div>
      )}
    </>
  );
}
