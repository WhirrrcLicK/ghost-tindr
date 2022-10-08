import React, { useState, useEffect } from "react";
import "./styles.scss";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

export default function ViewProfile(props) {
  const userId = useParams().userId;
  const [ghost, setGhost] = useState([]);

  const history = useHistory();

  const getGhost = async () => {
    try {
      const response = await axios.get("http://localhost:8000/user", {
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
