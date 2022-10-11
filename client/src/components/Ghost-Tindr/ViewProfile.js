import React, { useState, useEffect } from "react";
import "./viewprofile.scss";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

export default function ViewProfile() {
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

  console.log(userId);

  useEffect(() => {
    getGhost();
  }, []);

  console.log(ghost);
  return (
      <div className="viewprofile">
        <div style={{ backgroundImage: "url(" + ghost.url1 + ")" }} className="lrg_img">
        <p className="name">{ghost.name}<br></br>{ghost.age}<br></br>{ghost.location}</p>
        </div>
        <div className="small_img">
        <img src={ghost.url2} alt="img2" className="img2"/>
        <img src={ghost.url3} alt="img3" className="img3"/>
        </div>
        <div className="bio">
        <p>{ghost.type} looking for {ghost.interested_in}<br></br><br></br>
        About me: {ghost.bio_description}</p>
        </div>
      </div>
  );
}
