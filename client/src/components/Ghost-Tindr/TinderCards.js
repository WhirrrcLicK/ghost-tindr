import React, { useState } from "react";
import TinderCard from "react-tinder-card";

export default function TinderCards() {
  const [ghost, setGhost] = useState([
    {
      name: "Ghost 1",
      url: "https://www.ama.org/wp-content/uploads/2019/01/ghost-ads-image.jpg?resize=1170%2C550",
    },
    {
      name: "Ghost 2",
      url: "https://i.pinimg.com/236x/4b/12/76/4b127681f2e735fbeba52b2ad044486c.jpg",
    },
    {
      name: "Ghost 3",
      url: "https://i.pinimg.com/originals/4c/38/51/4c38519016f0bdc5bd5444aec30420c7.jpg",
    },
  ]);

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
              style={{ backgroundImage: `url(${eachGhost.url})` }}
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
