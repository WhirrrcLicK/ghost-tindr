import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";


export default function Matched() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [ghost, setGhost] = useState([]);

  const userId = cookies.UserId;

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
    <div className="chat-item">
    <div className="profile">
      <div className="img-container">
        <img src={ghost.url1} alt={"photo of " + ghost.name} />
      </div>
      <h3>{ghost.name}</h3>
    </div>
  </div>
  );
}
