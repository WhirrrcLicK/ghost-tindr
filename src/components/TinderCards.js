import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import axios from "axios";

export default function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "haha123",
      url: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Happy_smiley_face.png",
    },
    {
      name: "haha456",
      url: "https://cliparting.com/wp-content/uploads/2016/05/Smiley-face-emotions-clip-art-cute-flower-smiley-simple.jpg",
    },
  ]);

  // axios
  //   .get("http://localhost:8000/api/users")
  //   .then((data) => {
  //     setPeople([data]);
  //   })
  //   .catch((err) => console.log(err));

  return (
    <div>
      <h1>Cards</h1>

      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}
