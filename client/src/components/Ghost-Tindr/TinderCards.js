import axios from "axios";
import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import { useCookies } from 'react-cookie'

export default function TinderCards() {
  const [cookies, setCookie, removeCookie] = useCookies(['user'])
  const [ghost, setGhost] = useState([]);

  const userId = cookies.UserId

  const getGhost = async () => {
    try {
      const response = await axios.get('http://localhost:8000/users', {
        params: {userId}
      })
      setGhost(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getGhost()
  }, [])


  return (
    <div>
      <div className="tinderCards__cardContainer">
        {ghost.map((eachGhost) => (
          <TinderCard
            className="swipe"
            key={eachGhost.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: "url(" + eachGhost.url + ")"}}
              className="card"
            >
              <h3>{eachGhost.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}
