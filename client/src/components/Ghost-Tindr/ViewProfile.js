import React, { useState, useEffect } from "react";
import "./styles.scss";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import TinderCards from "./TinderCards"

export default function ViewProfile(props) {
  const userId = useParams().userId;
  const [ghost, setGhost] = useState([]);
  const history = useHistory();

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

  console.log(userId)

  useEffect(() => {
    getGhost();
  }, []);
  
  console.log(ghost)
  return (
    <>
      <div>
        <a href="/cards">
          <img src={ghost.url1} alt="img1" />
        </a>
        <img src={ghost.url2} alt="img2" />
        <img src={ghost.url3} alt="img3" />
        <p>Name: {ghost.name}</p>
        <p>Age: {ghost.age}</p>
        <p>I'm a: {ghost.type}</p>
        <p>I'm looking for: {ghost.interested_in}</p>
        <p>I'm located at: {ghost.location}</p>
        <p>About me: {ghost.bio_description}</p>
      </div>
    </>
  );
}
